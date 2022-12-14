export const useAutoScroll = (container, content, speed = 100, step = 1, isSmooth = false) => {
  const timer = ref(null)
  let parent = null
  let child = null

  const init = () => {
    parent = document.querySelector(container)
    child = document.querySelector(content)
    parent.style.overflow = 'hidden' // 隐藏
    if (isSmooth) {
      parent.style['scroll-behavior'] = 'smooth'
    }
    child.style.marginTop = 0
    child.style.marginBottom = 0
    const newChild = child.cloneNode(true)
    parent.appendChild(newChild)
    const newChild2 = child.cloneNode(true)
    parent.appendChild(newChild2)
  }

  const startScroll = (startTop = 0) => {
    let scrollTop = startTop

    timer.value = setInterval(() => {
      // 2:可能出现的精度丢失
      if (parent.scrollTop >= (child.scrollHeight * 2 - parent.offsetHeight)) {
        if (isSmooth) {
          parent.style['scroll-behavior'] = 'unset'
        }
        const newChild = child.cloneNode(true)
        parent.appendChild(newChild)
        child.remove()
        child = newChild

        scrollTop -= child.scrollHeight

        if (isSmooth) {
          setTimeout(() => {
            parent.style['scroll-behavior'] = 'smooth'
          }, 1)
        }
      } else {
        scrollTop += step
      }
      parent.scrollTo(0, scrollTop)
    }, speed)
  }

  const stopScroll = () => {
    clearTimeout(timer.value)
  }

  const setMouseEvent = () => {
    parent.addEventListener('mouseover', () => {
      parent.style.overflow = 'auto'
      stopScroll()
    })

    parent.addEventListener('mouseout', () => {
      parent.style.overflow = 'hidden'
      startScroll(parent.scrollTop)
    })
  }

  onMounted(() => {
    init()
    startScroll()
    setMouseEvent()
  })

  onUnmounted(() => {
    stopScroll()
  })

  return {
    startScroll,
    stopScroll
  }
}