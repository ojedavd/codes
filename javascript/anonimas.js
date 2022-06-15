function main() {
    const stuffList = [
        { isEnabled: true, name: 'justin'},
        { isEnabled: false, name: 'lauren'},
        { isEnabled: false, name: 'max'},
    ];

    const filteredStudff = stuffList.filter( stuff => !stuff.isEnabled);
    console.log(filteredStudff);
}

main();