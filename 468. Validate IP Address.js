var validIPAddress = function(queryIP) {
    const isIPv4 = (ip) => {
        const parts = ip.split('.');
        if (parts.length !== 4) return false;

        for (const p of parts) {
            if (p.length === 0 || p.length > 3) return false;
            if (p.length > 1 && p[0] === '0') return false;
            if (!/^\d+$/.test(p)) return false;
            const num = Number(p);
            if (num < 0 || num > 255) return false;
        }
        return true;
    };

    const isIPv6 = (ip) => {
        const parts = ip.split(':');
        if (parts.length !== 8) return false;
        const hexRegex = /^[0-9a-fA-F]{1,4}$/;

        for (const p of parts) {
            if (!hexRegex.test(p)) return false;
        }
        return true;
    };

    if (queryIP.includes('.')) {
        return isIPv4(queryIP) ? "IPv4" : "Neither";
    }
    if (queryIP.includes(':')) {
        return isIPv6(queryIP) ? "IPv6" : "Neither";
    }
    return "Neither";
};