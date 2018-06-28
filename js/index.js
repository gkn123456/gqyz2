window.onload=function(){
	let lb=document.querySelector(".lb");
	let li1=document.querySelectorAll(".lb li");
	let ld=document.querySelector(".ld");
	let ldb=document.querySelectorAll(".ld a");
	console.log(lb,li1,ld,ldb)
	let index=0;
	li1[0].style.zIndex=10;
	ldb[0].className="ldd";
	let t=setInterval(move,2500);
	function move(){
		index++;
		if(index==li1.length){
			index=0;
		}
		li1.forEach(function(v){
			v.style.zIndex=5;
			
		})
		ldb.forEach(function(v){
			
			v.className="";
		})
		li1[index].style.zIndex=10;
		ldb[index].className="ldd";
	}
	lb.onmouseenter=function(){
		clearInterval(t);
	}
	lb.onmouseleave=function(){
		t=setInterval(move,2500);
	}
	for(let i=0;i<ldb.length;i++){
		ldb[i].onmouseenter=function(){
			li1.forEach(function(v,index,obj){
				v.style.zIndex=5;
			})
			ldb.forEach(function(v,index,obj){
				v.className="";
			})
			li1[i].style.zIndex=10;
			ldb[i].className="ldd";
			index=i;	
		}
	}
}