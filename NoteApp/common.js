//Create Note버튼 누르면 작성 페이지 나옴

// 메모장 목록 페이지는 display none됨

const create_btn = document.getElementById("create_btn")
const noteList = document.getElementById("noteList")
const writeNote = document.getElementById("writeNote")
//create 버튼을 눌렀을때 동작하는 이벤트
create_btn.addEventListener("click", function(){
    noteList.style.display = "none"
    writeNote.style.display = "block"
    done_btn.style.display = "block"
    //전에 작성했던 내용 초기화 
    content.value = "" 
    title.value =""
})

//back버튼 누르면 그전 페이지로 돌아감
const back_btn = document.getElementById("back_btn")
back_btn.addEventListener("click", function(){
    noteList.style.display = "block"
    writeNote.style.display = "none"
})

const done_btn = document.getElementById("done_btn")

let title = document.getElementById("title") // 제목
let content = document.getElementById("content") //내용

//만약 title, contents부분의 글이 있고 done을 클릭할때마다 
//새로운 div생성 
done_btn.addEventListener("click",function(){
    
    const result_text = document.getElementById("result_text")
    result_text.style.display = "none"

    if(content.value != "" && title.value  !=""){

        noteList.style.display = "block"
        writeNote.style.display = "none"
    }

    let create_div = document.createElement("div")
    create_div.id = "newNote"

    let create_p = document.createElement("p")
    create_p.innerText = title.value   

    create_div.appendChild(create_p)
    
    const newNoteList = document.getElementById("newNoteList") //ul
    let create_li = document.createElement("li") // li생성
    let a =  newNoteList.appendChild(create_li)//ul > li넣기

    a.appendChild(create_div)

 
   //ul 자식 요소의 개수 
//    //let elecount = newNoteList.childElementCount
//    console.log(newNoteList.children)
   
    for(let i = 0; i< newNoteList.children.length; i++){
        newNoteList.children[i].addEventListener("click",function(){
            console.log(i +"번째 클릭하셨습니다.!!!!!!")
            console.log(arr[i].title)
            console.log(arr[i].content)

            noteList.style.display = "none"
            writeNote.style.display = "block"
            done_btn.style.display = "none"
            title.value = arr[i].title
            content.value = arr[i].content

            
        const remove_btn = document.getElementById("remove_btn")
            remove_btn.addEventListener("click", function(){
            console.log(newNoteList.children[i].remove())
            console.log(i)
            
            noteList.style.display = "block"
            writeNote.style.display = "none"

            delete arr[i]
            })
        })
    }

   
    //arr에서 받을 인수
    save(title.value ,content.value)
    
})


let arr = []
function save(title , content){
    arr.push({title, content})
}