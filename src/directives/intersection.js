export default function (el, binding) {
    const options = {
        rootMargin: '0px',
        threshold: 1.0
    }
    const callback = ([item]) => {
        if (item.isIntersecting) {
            binding.value()
        }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
}