var count = 10;
let showDialog = function (data) {
    const dialog = document.getElementById('timer');
    dialog.innerHTML = data;
}
    setTimeout(()=>{
        showDialog(count--);
        setTimeout(()=>{
            showDialog(count--);
            setTimeout(()=>{
                showDialog(count--);
                setTimeout(()=>{
                    showDialog(count--);
                    setTimeout(()=>{
                        showDialog(count--);
                        setTimeout(()=>{
                            showDialog(count--);
                            setTimeout(()=>{
                                showDialog(count--);
                                setTimeout(()=>{
                                    showDialog(count--);
                                    setTimeout(()=>{
                                        showDialog(count--);
                                        setTimeout(()=>{
                                            showDialog(count--);
                                             setTimeout(()=>{
                                                showDialog(`<img src ="flag.png"/>
                                                <div class = "hap">Happy</div>
                                                 <div class = "ind">Independence</div>
                                                 <div class ="day">Day!!</div>`);
                                             },1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
  

  