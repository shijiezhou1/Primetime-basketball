<script lang="ts" setup>
import { capitalize } from '~/utils/str'

// composable
const { t } = useLang()

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.home.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.home.description'),
    },
  ],
}))
</script>

<template>
  <PageContentRenderer path="/page/home" :page-title="$t('pages.home.title')" />
</template>
