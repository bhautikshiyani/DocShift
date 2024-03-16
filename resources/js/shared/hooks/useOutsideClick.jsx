import { useEffect, useRef } from "react"

const useOutsideClick = (callback, excludedElement) => {
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = event => {
      if (excludedElement && event.target === excludedElement) {
        return
      }

      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [callback, excludedElement])

  return ref
}

export default useOutsideClick
