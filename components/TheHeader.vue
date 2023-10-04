<script setup lang="ts">
// import Airtable from 'airtable'
// const airtableBase = new Airtable({ apiKey: 'AIRTABLE_API_KEY' }).base('AIRTABLE_BASE')
// const recordId = ref('')

const formatHour = (hour: number) => {
  if (hour > 12) {
    return hour - 12
  } else if (hour === 0) {
    return 12
  }
  return hour
}

const currentHour = ref(formatHour(new Date().getHours()))
const currentMinutes = ref(new Date().getMinutes())
const timeOfDay = ref('AM')

let intervalId: NodeJS.Timeout

onMounted(() => {
  intervalId = setInterval(() => {
    const actualCurrentHour = new Date().getHours()
    currentHour.value = formatHour(actualCurrentHour)
    currentMinutes.value = new Date().getMinutes()

    if (actualCurrentHour < 12) {
      timeOfDay.value = 'AM'
    } else {
      timeOfDay.value = 'PM'
    }
  }, 1000)

  // airtableBase('TABLE_ID').select({
  //   view: 'Grid view',
  // }).firstPage((err, records) => {
  //   if (err) {
  //     console.error(err)
  //     return
  //   }
  //   if (records) {
  //     records.forEach((record, index) => {
  //       if (index === 0) {
  //         recordId.value = record.id
  //         const token: string = record.fields.token as string
  //         const refreshToken: string = record.fields.refreshToken as string
  //         const expiry: number = record.fields.expiry as number
  //         const created: number = record.fields.created as number
          
  //         const tokenIsValid = checkTokenValidity(created, expiry)

  //         if (tokenIsValid) {
  //           getCurrentPlayingTrack(token).then((data) => {
  //             console.log('log', data)
  //             if (data.error) {
  //               refreshAccessToken(refreshToken)
  //                 .then((data) => {
  //                   updateAirtable(data.access_token, data.refresh_token, data.expires_in)
  //                   getCurrentPlayingTrack(data.access_token)
  //                 })
  //             }
  //           }).catch(() => {
  //             getRecentlyPlayedTracks(token).then((data) => {
  //               console.log('recents', data)
  //               if (data.error) {
  //                 refreshAccessToken(refreshToken)
  //                   .then((data) => {
  //                     updateAirtable(data.access_token, data.refresh_token, data.expires_in)
  //                     getCurrentPlayingTrack(data.access_token)
  //                   })
  //               }
  //             })
  //           })
  //         } else {
  //           refreshAccessToken(refreshToken).then((data) => {
  //             updateAirtable(data.access_token, data.refresh_token, data.expires_in)
  //             getCurrentPlayingTrack(data.access_token)
  //           })
  //         }
  //       }
  //     })
  //   }
  // })

  // const params = new URLSearchParams(window.location.search)
  // const code = params.get('code')

  // if (!code) {
  //   requestUserAuth()
  // } else {
  //   generateAccessToken(code)
  //     .then((token) => {
  //       getCurrentPlayingTrack(token)
  //     })
  // }
})

// const checkTokenValidity = (created: number, expiry: number) => {
//   const currentDate = new Date()
//   const expiryDate = new Date(expiry + created)

//   if (currentDate > expiryDate) {
//     return false
//   }

//   return true
// }

// const generateRandomString = (length: number) => {
//   let text = ''
//   const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

//   for (let i = 0; i < length; i++) {
//     text += possible.charAt(Math.floor(Math.random() * possible.length))
//   }

//   return text
// }

// const generateCodeChallenge = async (codeVerifier: string) => {
//   const data = new TextEncoder().encode(codeVerifier)
//   const hash = await crypto.subtle.digest('SHA-256', data)
//   const codeChallenge = btoa(String.fromCharCode(...new Uint8Array(hash)))
//     .replace(/=/g, '')
//     .replace(/\+/g, '-')
//     .replace(/\//g, '_')
//   return { codeVerifier, codeChallenge }
// }

// const requestUserAuth = async () => {
//   const codeVerifier = generateRandomString(128)
//   const { codeChallenge } = await generateCodeChallenge(codeVerifier)
//   const state = generateRandomString(16)
//   const scope = 'user-read-currently-playing user-read-recently-played'

//   localStorage.setItem('code_verifier', codeVerifier)

//   const args = {
//     response_type: 'code',
//     client_id: 'SPOTIFY_CLIENT_ID',
//     scope,
//     redirect_uri: 'http://localhost:3000',
//     code_challenge_method: 'S256',
//     code_challenge: codeChallenge,
//     state,
//   }

//   window.location.href = `https://accounts.spotify.com/authorize?${new URLSearchParams(args)}`
// }

// const generateAccessToken = async (code: string) => {
//   const verifier = localStorage.getItem('code_verifier')

//   const response = await fetch('https://accounts.spotify.com/api/token', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: `grant_type=authorization_code&client_id=${import.meta.env.VITE_SPOTIFY_CLIENT_ID}&code=${code}&redirect_uri=http://localhost:3000&code_verifier=${verifier}`,
//   })
//   const data = await response.json()
//   console.log(data)
//   return data.access_token
// }

// const refreshAccessToken = async (refreshToken: string) => {
//   const response = await fetch('https://accounts.spotify.com/api/token', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'Authorization': 'Basic ' + btoa('SPOTIFY_CLIENT_ID' + ':' + 'SPOTIFY_CLIENT_SECRET')
//     },
//     body: `grant_type=refresh_token&refresh_token=${refreshToken}`,
//   })
//   const data = await response.json()
//   console.log(data)
//   return data
// }

// const updateAirtable = async (token: string, refreshToken: string, expiry: number) => {
//   airtableBase('TABLE_ID').update([
//     {
//       id: recordId.value,
//       fields: {
//         token,
//         refreshToken,
//         expiry: expiry * 1000,
//         created: Date.now(),
//       }
//     }
//   ], (err, records) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     if (records) {
//       console.log(records)
//     }
//   })
// }

// const getCurrentPlayingTrack = async (token: string) => {
//   const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${token}`,
//     }
//   })
//   const data = await response.json()
//   return data
// }

// const getRecentlyPlayedTracks = async (token: string) => {
//   const response = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${token}`,
//     }
//   })
//   const data = await response.json()
//   return data
// }

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div class="fixed top-0 left-0 w-full z-50 bg-adura-black text-sm md:text-base lg:text-xl font-normal text-white px-[8.3vw] xl:px-[120px] py-5 md:py-6 lg:py-8 flex flex-row justify-between items-center">
    <div class="flex flex-row items-center gap-x-1">
      <p>
        <span>Lagos, </span>
        <span class="hidden md:inline">Nigeria</span>
        <span class="md:hidden">NG</span>
      </p>
      <span>|</span>
      <p>
        <span v-if="currentHour < 10">0</span>
        <span>{{ currentHour }}</span>
        <span class="blink">:</span>
        <span v-if="currentMinutes < 10">0</span>
        <span>{{ currentMinutes }}</span>
        <span>{{ timeOfDay }}</span>
      </p>
    </div>
    <!-- <p class="hidden md:block">Listening to: Human by Jon Bellion</p> -->
    <a href="" class="border-b border-solid border-white w-max">Resumé</a>
  </div>
</template>

<style scoped>
.blink {
  animation: blink 1.5s linear infinite;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>