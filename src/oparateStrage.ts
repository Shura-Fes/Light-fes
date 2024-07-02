export const resetStrage = () => {
    ["A", "B", "N"].map(name => makeKey(name)).forEach((name) => {
        if (localStorage.getItem(name)) {
            localStorage.setItem(name, "NG")
        }
    })
}

export const clearContent = (name: string) => {
    localStorage.setItem(makeKey(name), "OK")
}

export const resetCleared = () => {
    ["A", "B", "N"].forEach(name => {
        localStorage.setItem(makeKey(name), "NG")
    })
}

export const checkCleared = (name: string) => localStorage.getItem(makeKey(name)) === "OK"


const makeKey = (name: string) => `LightFes2024_cleared_${name}`
