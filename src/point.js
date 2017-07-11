export function point(x, y) {
    return {
        x,
        y
    };
}

export function norm(vec) {
    return Math.sqrt(vec.x * vec.x + vec.y * vec.y);
}