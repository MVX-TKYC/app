export function truncateAddress(address) {
    var len = address.length
    return address.slice(0, 5) + "..." + address.slice(len - 5, len)
}