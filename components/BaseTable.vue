<script setup lang="ts">
const props = defineProps<{
  tableData: {
    headers: string[]
    rows: {
      [key: string]: string
    }[]
  }
}>()
</script>

<template>
  <table class="table-auto w-full">
    <thead>
      <tr class="border-b border-solid border-adura-black bg-[#F0F0F0]">
        <th v-for="(header, index) in props.tableData.headers" :key="index" :class="['text-left', 'py-4', 'pr-4', 'md:pr-14', 'text-adura-black', 'text-base', 'md:text-lg', 'lg:text-2xl', 'font-medium uppercase', {'pl-2': index === 0}]">
          {{ header.split('-').join(' ') }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in props.tableData.rows" :key="index" class="border-b border-solid border-adura-black">
        <td v-for="header in props.tableData.headers" :class="['py-4', 'md:py-6', 'lg:py-10', 'pr-4', 'md:pr-14', 'text-adura-black', 'text-sm', 'md:text-base', 'lg:text-xl', 'font-normal', {'pl-2': header === props.tableData.headers[0]}]">
          {{ row[header] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>