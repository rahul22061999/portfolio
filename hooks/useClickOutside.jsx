import { useEffect } from 'react'

/**
 * useClickOutside
 * Calls handler when a click or touch event happens outside the given ref.
 *
 * @param {React.RefObject<HTMLElement>} ref - The ref to the element to detect outside clicks of
 * @param {(event: MouseEvent | TouchEvent) => void} handler - Function to call on outside click
 */
function useClickOutside(ref, handler) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [ref, handler])
}

export default useClickOutside
