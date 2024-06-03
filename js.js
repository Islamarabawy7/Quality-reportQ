        let add = document.getElementById('add')
        let done = document.getElementById('done')
        let pop = document.getElementById('pop')
        let one = document.getElementById('on')
        let two = document.getElementById('tw')
        let three = document.getElementById('thre')
        let four = document.getElementById('fou')
        let five = document.getElementById('fiv')
        let sex = document.getElementById('se')
        let seven = document.getElementById('seve')
        let eight = document.getElementById('eigh')
        let hidden = document.querySelector('.hidden')
        let select = document.getElementById("choices")
        let allname = document.querySelector('#name')
        let toptop = document.querySelector('#topheight')
        let option = document.getElementById("option")
        let inputs = document.querySelectorAll('input')
let getop =document.getElementById('#getop')
let home = document.getElementById('home')

        let array ;
        let total;
          let key;
          home.addEventListener('click',function(){
            window.location.href = "main.html"
        })

        let selectalll ; 
      document.addEventListener('DOMContentLoaded',function(){
        if (localStorage.local != null) {
          array= JSON.parse(localStorage.local)
        }else{
          array = [];

        }


        inputs.forEach(function(input,index){
          
          input.addEventListener('input',function(){
            if (input.value.length === input.maxLength) {
              if (index+1<inputs.length) {
                inputs[index+1].focus()
              }
            }
          })
        })


        function se(){
          select.addEventListener('change',function(){
            selectalll = this.value;
            if (select.selectedIndex === -1) {
              select.selectedIndex = 0;
            }
        
            let h2 = document.createElement('h2')
            h2.classList.add('weightmeter')
            pop.appendChild(h2) 
            h2.innerHTML = `
            قطر ${select.value } وزن المتر
            `
          })
         
        }
  
        
        add.addEventListener('click',function(){
          select.style.display = 'block'
       
         
          se()
          content()

        }

        )
    allname.addEventListener('change',function(){
      let getname = this.value;
      if (allname.selectedIndex === -1) {
        allname.selectedIndex = 0;
      }
    })
   
     
        done.addEventListener("click", function(){
          total = +(+one.value + +two.value + +three.value+ +four.value + +five.value + +sex.value + +seven.value  + +eight.value) / 8 ;
        total.toPrecision(2)
          let now = new Date();
          let hours =  (now.getHours())
          let minuts = (now.getMinutes())
          let year = now.getFullYear()
          let month = now.getMonth()+1;
          let day = now.getDay()+2 
          let days = ['الأحد','الإثنين','الأربعاء','الخميس','الجمعه','السبت']
          let today = new Date();
          let dayname = days[today.getDay()]
          let pm = hours >=12 ?'pm':'am'
          hours = hours %12 || 12;
          console.log(hours)
          pm.padStart(2,'0')
          console.log(pm)
          let strtime = `${hours}:${minuts} ${pm}`
          let yearall = `${day} / ${month} / ${year}`
   console.log(strtime)
          let obj = {
            one : one.value,
            two : two.value,
            three : three.value,
            four : four.value,
            five : five.value,
            sex : sex.value,
            seven : seven.value,
            eight : eight.value,
            diameter :select.value,
            name : allname.value,
            strtime :strtime,
            yearall:yearall,
             dayname:dayname,
             total : total,
            
          }

          
          array.push(obj)
          
          getdata()
          console.log(obj)


        window.localStorage.setItem('local' , JSON.stringify(array))
          console.log(total)

          clear()

        })
        function content(){
          pop.classList.add("op")

        let btn = document.createElement('button')
        let h3 = document.createElement('h3')
        let text = document.createTextNode("X")
        h3.appendChild(text)
        text.style = 'text-align:center'
        btn.appendChild(h3)
        btn.classList.add("delete")
        pop.style.display = 'grid'
        hidden.style.display = 'block'

        btn.addEventListener("click",function(){
          pop.classList.remove('op')
          btn.style.display = 'none'
        hidden.style.display = 'none'
          
        })
        pop.appendChild(btn)
        }
        let countainer ;
        function getdata (){
          document.getElementById('card').innerHTML='';
countainer ='';
        for (let i = 0; i < array.length; i++) {
          
          countainer += `
          <div class = 'new'>
          
          <span id="one"><h4>${array[i].one}</h4></span>
          <span id="two"><h4>${array[i].two}</h4></span>
          <span id="three"><h4>${array[i].three}</h4></span>
          <span id="four"><h4>${array[i].four}</h4></span>
          <span id="five"><h4>${array[i].five}</h4></span>
          <span id="sex"><h4>${array[i].sex}</h4></span>
          <span id="seven"><h4>${array[i].seven}</h4></span>
          <span id="eight"><h4>${array[i].eight}</h4></span>
          <h2 id="miidle">متوسط السمك <i class="fas fa-arrow-left"></i> ${array[i].total}</h2>
          <h2 id="nameto"> مراقب الجوده <i class="fas fa-arrow-left"></i> ${array[i].name}</h2>
          <h2 id="pipe"> قطر الماسوره <i class="fas fa-arrow-left"></i> <i class="far fa-circle"></i> ${array[i].diameter}</h2>
          <h1 id='data'>  <i class="far fa-clock"></i> ${array[i].strtime} <br>  ${array[i].yearall} <br> يوم ${array[i].dayname} </h1>

          </div>
          `  
          
        }
        document.getElementById('card').innerHTML = countainer;

        }


        function clear (){
          one.value = '';
          two.value = '';
          three.value = '';
          four.value = '';
          five.value = '';
          sex.value = '';
          seven.value = '';
          eight.value = '';
          getdata();

        }
getdata()
window.onload = getdata;
window.onload = se;
      })
      window.addEventListener('scroll',function(){
        if (window.scrollY>300) {
          toptop.style.display = 'block'
        }else{
          toptop.style.display = 'none'
        }
      })
      toptop.addEventListener('click',function(){
        window.scrollTo({
          top:0,
          behavior:'smooth'
        })
      })
      