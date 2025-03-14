function calc() {
    let totalMarks_OF_std = +document.querySelector("#stdtm").value;
    
    let obtMarks_OF_std = +document.querySelector("#stdom").value;

    let res_OF_std = obtMarks_OF_std / totalMarks_OF_std * 100;

     document.write("you've got it "     + res_OF_std   + "%")
    


}