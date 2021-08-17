async function getData() {
    setTimeout(()=>{
        return '数据'
    },3000)
}
async function a() {
    let d = await getData();
    console.log(d);
}
a();