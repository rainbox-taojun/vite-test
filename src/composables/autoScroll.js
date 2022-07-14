export const useAutoScroll = (container, content, speed = 100) => {
  const timer = ref(null)

  onMounted(() => {
    const parent = document.querySelector(container)
    const child = document.querySelector(content)
    let scrollTop = 0

    timer.value = setInterval(() => {
      if (parent.scrollTop >= child.scrollHeight - parent.offsetHeight) {
        scrollTop = 0
      } else {
        scrollTop++
      }
      parent.scrollTo(0, scrollTop)
    }, speed)
  })

  onUnmounted(() => {
    clearTimeout(timer.value)
  })
}