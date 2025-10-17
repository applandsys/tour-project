export const formatDate = (iso) => {
    if (!iso) return '-'
    try {
        const dt = new Date(iso)
        return dt.toLocaleString(undefined, {
            year: 'numeric', month: 'short', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        })
    } catch (e) {
        return iso
    }
}

