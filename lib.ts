export function diamond(count: number) {
    let str = '';
    
    for (let i = 1; i <= count; i++) {
        str += line(i) + "\n"
    };

    for (let j = count - 1; j > 0; j--) {
        str += line(j) + "\n"
    };

    return str;
}

function line(i: number) {
    return left(i) + i + right(i)
}

function left(i: number): string {
    let str = '';

    for (let j = 1; j < i; j++) {
        str += j
    }

    return str.padStart(9)
}

function right(i: number): string {
    let str = '';

    for (let j = i - 1; j > 0; j--) {
        str += j
    }

    return str
}
