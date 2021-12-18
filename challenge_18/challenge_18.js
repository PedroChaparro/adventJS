function fixFiles(files) {
    const file_name_duplicates = {};
    const output = []; 

    files.map((file) => {
        file_name_duplicates[file] = file_name_duplicates[file] == undefined ? 0 : file_name_duplicates[file] + 1;

        output.push(file_name_duplicates[file] == 0 ? file : `${file}(${file_name_duplicates[file]})`); 
    });

    console.log(output); 
    return output;
}

const files = ['photo', 'postcard', 'photo', 'photo', 'video'];
fixFiles(files); // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game']; 
fixFiles(files2) // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']; 
fixFiles(files3) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
