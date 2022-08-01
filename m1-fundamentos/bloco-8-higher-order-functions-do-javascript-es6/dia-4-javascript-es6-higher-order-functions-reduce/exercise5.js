const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = () => {
    return names.reduce((acc, curr) => {
        for (let index = 0; index < curr.length; index += 1) {
            if (curr[index] === 'A' || curr[index] === 'a') {
                acc += 1
            }
        }
        return acc;
    }, 0)
}

console.log(containsA());