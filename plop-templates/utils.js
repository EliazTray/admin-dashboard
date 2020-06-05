exports.validName = name => {
    return v => {
        if (!v || v.trim === '') {
            return `${name} is required`
        } else if (/^\d/.test(v)) {
            return `${name} can't startsWith number`
        }
        return true
    }
}
