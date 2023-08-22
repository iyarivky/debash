const text = "OgDz=''\'';bQ';koEz='Uz$Z';yRBz='$rx'\''';BkDz='$YX'\'''";
const result = text.split(';').reduce((acc, item) => {
    const [key, value] = item.split('=');
    if (value) {
        acc[key] = value.slice(1, -1);
    }
    return acc;
}, {});
console.log(result);
