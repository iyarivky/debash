//deobfucation button
async function deobfuscate(){
    try{
        let inputText = document.getElementById("input").value;
        let parts = inputText.split('\neval');
        let result = parts[0].split(';').reduce((acc, item) => {
            const [key, value] = item.split('=');
            if (value) {
                acc[key] = value.slice(1, -1);
            }
            return acc;
        }, {});
        let order = parts[1].replace(/"/g, '');
        let keys = order.split('$').filter(key => key !== "" && key !== " ");
        let output = "";
        for (let i = 0; i < keys.length; i++) {
            output += result[keys[i]];
        }
        let removeQuote = output.split("\n")
        let cleanData = ""
        for (let i= 0; i < removeQuote.length; i++){
            cleanData += removeQuote[i].replace(/^"|"$|^'|'$/g, '')
            cleanData += "\n"
        }
        document.getElementById("output").value = cleanData;
        let success = SnackBar({
            message: "Deobfuscate Success.",
            position: "bc",
            fixed: true,
            status: "success"
          });
    } catch (error){
        let fail = SnackBar({
            message: `Error: ${error}`,
            position: "bc",
            fixed: true,
            status: "error"
          });
        console.error(error)
    }
};

//copy button
function copyConfig(outputId) {
    var copyText = document.getElementById(outputId);
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
    let copySnack = SnackBar({
        message: "Successfully copied to clipboard.",
        position: "bc",
        fixed: true,
        status: "success"
      });
  };

//download button
function downloadConfig(outputId){
    let outputText = document.getElementById(outputId).value;
    let blob = new Blob([outputText], {type: "text/plain;charset=utf-8"});
    let date = new Date();
    let dateString = date.toLocaleDateString('id-ID').replace(/\//g, '-');
    let timeString = date.toLocaleTimeString('id-ID');
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = `DeBash-${dateString}-${timeString}.sh`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

//upload file button
function uploadFileButton() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.sh';
    fileInput.onchange = event => {
        const reader = new FileReader();
        reader.onload = event => {
            const dataFile = event.target.result;
            document.getElementById("input").value = dataFile;
        };
        reader.readAsText(event.target.files[0]);
    };
    fileInput.click();
};

//drag and drop function
const dropArea = document.getElementById("drop-area");

dropArea.ondragover = event => {
    event.preventDefault();
};

dropArea.ondrop = event => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file.name.endsWith('.sh')) {
        const reader = new FileReader();
        reader.onload = event => {
            const dataFile = event.target.result;
            document.getElementById("input").value = dataFile;
        };
        reader.readAsText(file);
    } else {
        let fail2 = SnackBar({
            message: `Error: wrong file extension`,
            position: "bc",
            fixed: true,
            status: "error"
          });
    }
};