class music{
    constructor(song){
        this.song = song;
    }
    songs(){
        console.log(this.song,"songs playing....!");
    }
}
class sing extends music{
    singing(){
        console.log(this.song,"songs singing...!");
    }
}
const childObj = new sing('classical');
childObj.songs(); //here inheritance happens
childObj.singing();