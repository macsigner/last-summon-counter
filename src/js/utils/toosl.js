export const delegate = (selector, fn) => {
    return (e) => {
        if(!e.target.closest(selector)) {
            return;
        }

        fn(e);
    }
};
