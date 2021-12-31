let htmleditor;
let csseditor;
let jseditor;
var edtcont = document.getElementsByClassName('edt-cont');


function loader() {
    htmleditor = ace.edit("htmleditor");
    htmleditor.setTheme("ace/theme/terminal");
    htmleditor.session.setMode("ace/mode/html");
    $('.edt-text').text('HTML');
    csseditor = ace.edit("csseditor");
    csseditor.setTheme("ace/theme/terminal");
    csseditor.session.setMode("ace/mode/css");
    $("#csseditor").hide();
    jseditor = ace.edit("jseditor");
    jseditor.setTheme("ace/theme/terminal");
    jseditor.session.setMode("ace/mode/javascript");
    $("#jseditor").hide();
}

function chetb(tab) {
    if (tab == "html") {
        $("#htmleditor").show();
        $('.edt-text').text('HTML');
        $("#htmltbtn").addClass("activetb");
        $("#csseditor").hide();
        $("#csstbtn").removeClass("activetb");
        $("#jseditor").hide();
        $("#jstbtn").removeClass("activetb")
    }
    else if (tab == "css") {
        $("#csseditor").show();
        $('.edt-text').text('CSS');
        $("#csstbtn").addClass("activetb");
        $("#htmleditor").hide();
        $("#htmltbtn").removeClass("activetb");
        $("#jseditor").hide();
        $("#jstbtn").removeClass("activetb");
    }
    else if (tab == "js") {
        $("#jseditor").show();
        $('.edt-text').text('JavaScript');
        $("#jstbtn").addClass("activetb");
        $("#csseditor").hide();
        $("#csstbtn").removeClass("activetb");
        $("#htmleditor").hide();
        $("#htmltbtn").removeClass("activetb");
    }
    else {
        console.log("An internal error occured");
    }
}

function toolbar(action) {
    if (action == "newcode") {
        htmleditor.setValue('');
        csseditor.setValue('');
        jseditor.setValue('');
    }
    else if (action == "runcode") {
        $('.live').css("display","block");
        livepreview();
    }
    else if (action == "openfile") {
        codeopen()
        /*$('.code-open-dlg').css("display","block");*/
    }
    else if (action == "savecode") {
        codesave();
    }
    else {
        console.log("An internal error occured");
    }
}

function codesave() {
    savehtmlcode()
}

function codeopen() {
    let htmlcode;
    let csscode;
    let jscode;
    htmlfilet = getcfd('html');
    cssfilet = getcfd('css');
    jsfilet = getcfd('js');
    if (htmlfilet == "") {
        htmlcode = htmleditor.getValue();
        if (cssfilet == "") {
            csscode = csseditor.getValue();
            if (jsfilet == ""){
                jscode = jseditor.getValue();
            }
            else {
                jscode = jsfilet;
            }
        }
        else {
            csscode = cssfilet;
        }
    }
    else {
        htmlcode = htmlfilet;
    }

    if (cssfilet == "") {
        csscode = csseditor.getValue();
        if (htmlfilet == "") {
            htmlcode = htmleditor.getValue();
            if (htmlfilet == ""){
                jscode = jseditor.getValue();
            }
            else {
                jscode = jsfilet;
            }
        }
        else {
            htmlcode = htmlfilet;
        }
    }
    else {
        csscode = cssfilet;
    }

    if (jsfilet == "") {
        jscode = jseditor.getValue();
        if (cssfilet == "") {
            csscode = csseditor.getValue();
            if (htmlfilet == ""){
                htmlcode = htmleditor.getValue();
            }
            else {
                htmlcode = htmlfilet;
            }
        }
        else {
            csscode = cssfilet;
        }
    }
    else {
        jscode = jsfilet;
    }
    htmleditor.getSession().setValue(htmlcode);
    csseditor.getSession().setValue(csscode);
    jseditor.getSession().setValue(jscode);
}

async function savehtmlcode() {
    contents = htmleditor.getSession().getValue()
    const options = {
      types: [
        {
          description: 'HTML Files',
          accept: {
            'text/html': ['.html'],
          },
        },
      ],
    };
    const handle = await window.showSaveFilePicker(options);
    const writer = await handle.createWritable();
    await writer.write(contents);
    await writer.close();
    return handle;
}

async function savecsscode() {
    contents = csseditor.getSession().getValue()
    const options = {
      types: [
        {
          description: 'CSS Files',
          accept: {
            'text/css': ['.css'],
          },
        },
      ],
    };
    const handle = await window.showSaveFilePicker(options);
    const writer = await handle.createWritable();
    await writer.write(contents);
    await writer.close();
    return handle;
}

async function savejscode() {
    contents = jseditor.getSession().getValue()
    const options = {
      types: [
        {
          description: 'JavaScript Files',
          accept: {
            'text/js': ['.js'],
          },
        },
      ],
    };
    const handle = await window.showSaveFilePicker(options);
    const writer = await handle.createWritable();
    await writer.write(contents);
    await writer.close();
    return handle;
}

function getcfd(cfl) {
    let fileHandle;
    if (cfl == "html") {
        /*[fileHandle] = await window.showOpenFilePicker();
        const file = await fileHandle.getFile();
        const contents = await file.text();
        filet = contents;*/
        filet = "None";
        return filet;
    }
    else if (cfl == "css") {
        /*[fileHandle] = await window.showOpenFilePicker();
        const file = await fileHandle.getFile();
        const contents = await file.text();
        filet = contents;*/
        filet = "None";
        return filet;
    }
    else if (cfl == "js") {
        /*[fileHandle] = await window.showOpenFilePicker();
        const file = await fileHandle.getFile();
        const contents = await file.text();
        filet = contents;*/
        filet = "None";
        return filet;
    }
}

function livepreview() {
    i = document.getElementById('i');
    console.log(htmleditor.getSession().getValue()+'<style>'+csseditor.getSession().getValue()+'</style><script>'+jseditor.getSession().getValue()+'<\/script>');
    i.srcdoc=htmleditor.getSession().getValue()+'<style>'+csseditor.getSession().getValue()+'</style><script>'+jseditor.getSession().getValue()+'<\/script>';
}

window.onload = loader();

/*function compile() {
   var html = document.getElementById("html");
   var css = document.getElementById("css");
   var js = document.getElementById("js");
   var code = document.getElementById("code").contentWindow.document;

   document.body.onkeyup = function() {
     code.open();
     code.writeln(
       html.value +
         "<style>" +
         css.value +
         "</style>" +
         "<script>" +
         js.value +
         "</script>"
     );
     code.close();
   };
 }

 compile();*/