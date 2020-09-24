

let a = 5;
const s = document.querySelector('.status');


const promise = new Promise((resolve, reject)=>{
    let val = 0;
    let flag = true;
    
    while(flag){
        if(val === " " || val<=0){
            val = prompt("Введите число", 0);
            if(val === null){
                flag = false;
                reject("Отмена")
            }
        }else{
            console.log("Запрос данных");ё
            flag = false;
           resolve(val)
        }
    }

})

promise.then((data)=>{

    console.log("Обработка данных....");

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(data >=18){
                resolve(true);
            }else{
                reject(false);
            }
        },5000);
    })
})
.then((res)=>{

    console.log("Проверяем возраст");

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(res == true){
                resolve("Вход разрешен...");
            }else{
                reject("Вход запрещен,вам нету 18");
            }
        },3000)
    })
})
.then((res)=>{
    console.log(res);
    s.textContent = res;
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    // s.textContent = "Очистили";
})