(()=>{"use strict";const e=[{title:"Hello World From Array",details:"Saying hello from afar",priority:"Medium",dueDate:"12/12/4314",complete:!1},{title:"Greetings to you",details:"Greetings from me to you",priority:"Medium",dueDate:"12/12/4824",complete:!1},{title:"I am terror",details:"Screeem!",priority:"Medium",dueDate:"12/12/4124",complete:!1}],t=document.querySelector(".content"),o=(document.querySelector(".add-button"),document.querySelector(".details-button"),document.querySelector(".home"),document.querySelector(".details-window")),n=document.querySelector(".edit-window"),d=(document.querySelector(".edit-button"),document.querySelector(".overlay")),c=document.querySelector(".close-details-button"),l=document.querySelector(".close-edit-button"),s=document.querySelector(".add-task"),i=document.querySelector(".todo-content"),r=document.querySelector(".edit-title-input"),a=document.querySelector(".edit-details-input"),u=document.querySelector(".submit-edit");function m(e){d.classList.remove("display-none"),e.classList.remove("display-none")}function y(e){d.classList.add("display-none"),e.classList.add("display-none")}o.getElementsByTagName("div")[0];const p=function(e,t,d,c){const l=document.createElement("div");l.classList.add("todo-item");const s=document.createElement("div"),i=document.createElement("input");i.type="checkbox";const r=document.createElement("p");r.classList.add("title"),r.innerText=e,s.append(i,r);const a=document.createElement("div"),u=document.createElement("button");u.classList.add("details-button"),u.innerText="Details";const y=document.createElement("button");y.classList.add("edit-button"),y.innerText="Edit";const p=document.createElement("button");p.classList.add("delete-button"),p.innerText="Delete";const S=document.createElement("p");return S.classList.add("date"),S.innerText=c,a.append(u,y,S,p),l.append(s,a),u.addEventListener("click",(()=>{m(o),function(e,t,o,n){document.querySelector(".details-label").innerText="Project Home"+e,document.querySelector(".details-title").innerText=t+"Details Inner Text"}(e,t)})),y.addEventListener("click",(()=>{m(n)})),l},S=document.querySelector("body");l.addEventListener("click",(()=>{y(n)})),c.addEventListener("click",(()=>{y(o),console.log("Close Details")})),console.log(e),S.onscroll=()=>{console.log("Hello body")},i.onscroll=()=>{console.log("Hello, todo-content")},t.onscroll=()=>{console.log("hello, content")},u.addEventListener("click",(()=>{T.addTask({title:r.value,details:a.value,priority:"High",dueDate:"13/10/4408",complete:!1})})),s.addEventListener("click",(()=>{T.editTask(n)}));const T=new class{constructor(e){this.arrayOfTodos=e}displayTasks(){this.arrayOfTodos.forEach((e=>{i.append(p(e.title,e.details,e.priority,e.dueDate))}))}addTask(t){this.arrayOfTodos.unshift(t),i.innerHTML="",console.log("Home Projects Array: ",e),this.displayTasks(),y(n)}editTask(){m(n)}}(e);T.displayTasks()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVFDLElBQUksZ0JBQWdCLElBRzlCRCxRQUFRQyxJQUFJLEdBRVpGLEVBQUtHLFNBQVcsS0FDZEYsUUFBUUMsSUFBSSxhQUFhLEVBRzNCM0IsRUFBWTRCLFNBQVcsS0FDckJGLFFBQVFDLElBQUksc0JBQXNCLEVBR3BDcEMsRUFBUXFDLFNBQVcsS0FDakJGLFFBQVFDLElBQUksaUJBQWlCLEVBYS9CeEIsRUFBaUJxQixpQkFBaUIsU0FBUyxLQUN6Q0ssRUFBYUMsUUFBUSxDQUNuQjVDLE1BQU9lLEVBQWU4QixNQUN0QjVDLFFBQVNlLEVBQWlCNkIsTUFDMUIzQyxTQUFVLE9BQ1ZDLFFBQVMsYUFDVEMsVUFBVSxHQUNWLElBR0pTLEVBQWN5QixpQkFBaUIsU0FBUyxLQUN0Q0ssRUFBYUcsU0FBU3JDLEVBQVcsSUFnQ25DLE1BQU1rQyxFQUFlLElBekJyQixNQUNFSSxZQUFZQyxHQUNWQyxLQUFLRCxhQUFlQSxDQUN0QixDQUVBRSxlQUNFRCxLQUFLRCxhQUFhRyxTQUFTQyxJQUN6QnRDLEVBQVlrQixPQUNWLEVBQWNvQixFQUFLcEQsTUFBT29ELEVBQUtuRCxRQUFTbUQsRUFBS2xELFNBQVVrRCxFQUFLakQsU0FDN0QsR0FFTCxDQUVBeUMsUUFBUVMsR0FDTkosS0FBS0QsYUFBYU0sUUFBUUQsR0FDMUJ2QyxFQUFZeUMsVUFBWSxHQUN4QmYsUUFBUUMsSUFBSSx3QkFBeUIsR0FDckNRLEtBQUtDLGVBQ0w1QixFQUFZYixFQUNkLENBQ0FxQyxXQUNFNUIsRUFBV1QsRUFDYixHQUdnQyxHQUNsQ2tDLEVBQWFPLGMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3REYXRhLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZG9tU3R1ZmYvZ2V0RWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb21TdHVmZi91dGlsaXR5RnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZG9tU3R1ZmYvY29tcG9uZW50cy9kZXRhaWxzV2luZG93LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZG9tU3R1ZmYvY29tcG9uZW50cy90b2RvSXRlbUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBob21lUHJvamVjdHNBcnJheSA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJIZWxsbyBXb3JsZCBGcm9tIEFycmF5XCIsXHJcbiAgICBkZXRhaWxzOiBcIlNheWluZyBoZWxsbyBmcm9tIGFmYXJcIixcclxuICAgIHByaW9yaXR5OiBcIk1lZGl1bVwiLFxyXG4gICAgZHVlRGF0ZTogXCIxMi8xMi80MzE0XCIsXHJcbiAgICBjb21wbGV0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJHcmVldGluZ3MgdG8geW91XCIsXHJcbiAgICBkZXRhaWxzOiBcIkdyZWV0aW5ncyBmcm9tIG1lIHRvIHlvdVwiLFxyXG4gICAgcHJpb3JpdHk6IFwiTWVkaXVtXCIsXHJcbiAgICBkdWVEYXRlOiBcIjEyLzEyLzQ4MjRcIixcclxuICAgIGNvbXBsZXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkkgYW0gdGVycm9yXCIsXHJcbiAgICBkZXRhaWxzOiBcIlNjcmVlZW0hXCIsXHJcbiAgICBwcmlvcml0eTogXCJNZWRpdW1cIixcclxuICAgIGR1ZURhdGU6IFwiMTIvMTIvNDEyNFwiLFxyXG4gICAgY29tcGxldGU6IGZhbHNlLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lUHJvamVjdHNBcnJheTtcclxuIiwiY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtYnV0dG9uXCIpO1xyXG5jb25zdCBkZXRhaWxzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWJ1dHRvblwiKTtcclxuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcclxuY29uc3QgZGV0YWlsc1dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlscy13aW5kb3dcIik7XHJcbmNvbnN0IGVkaXRXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtd2luZG93XCIpO1xyXG5jb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWJ1dHRvblwiKTtcclxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuY29uc3QgY2xvc2VEZXRhaWxzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1kZXRhaWxzLWJ1dHRvblwiKTtcclxuY29uc3QgY2xvc2VFZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1lZGl0LWJ1dHRvblwiKTtcclxuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIik7XHJcbmNvbnN0IHRvZG9Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWNvbnRlbnRcIik7XHJcbmNvbnN0IGVkaXRUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXRpdGxlLWlucHV0XCIpO1xyXG5jb25zdCBlZGl0RGV0YWlsc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWRldGFpbHMtaW5wdXRcIik7XHJcbmNvbnN0IHN1Ym1pdFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1lZGl0XCIpO1xyXG5cclxuZXhwb3J0IHtcclxuICBjb250ZW50LFxyXG4gIGFkZEJ1dHRvbixcclxuICBkZXRhaWxzQnV0dG9uLFxyXG4gIG92ZXJsYXksXHJcbiAgY2xvc2VEZXRhaWxzQnV0dG9uLFxyXG4gIGRldGFpbHNXaW5kb3csXHJcbiAgaG9tZSxcclxuICBjbG9zZUVkaXRCdXR0b24sXHJcbiAgZWRpdFdpbmRvdyxcclxuICBlZGl0QnV0dG9uLFxyXG4gIGFkZFRhc2tCdXR0b24sXHJcbiAgdG9kb0NvbnRlbnQsXHJcbiAgZWRpdFRpdGxlSW5wdXQsXHJcbiAgZWRpdERldGFpbHNJbnB1dCxcclxuICBzdWJtaXRUYXNrQnV0dG9uLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBvdmVybGF5IH0gZnJvbSBcIi4vZ2V0RWxlbWVudHNcIjtcclxuXHJcbmZ1bmN0aW9uIG9wZW5XaW5kb3codGFyZ2V0KSB7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheS1ub25lXCIpO1xyXG4gIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheS1ub25lXCIpO1xyXG59XHJcbmZ1bmN0aW9uIGNsb3NlV2luZG93KHRhcmdldCkge1xyXG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktbm9uZVwiKTtcclxuICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktbm9uZVwiKTtcclxufVxyXG5cclxuZXhwb3J0IHsgY2xvc2VXaW5kb3csIG9wZW5XaW5kb3cgfTtcclxuIiwiaW1wb3J0IHsgb3ZlcmxheSwgZGV0YWlsc1dpbmRvdyB9IGZyb20gXCIuLi9nZXRFbGVtZW50c1wiO1xyXG5jb25zdCBmaXJzdERpdiA9IGRldGFpbHNXaW5kb3cuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIilbMF07XHJcblxyXG4vLyBmdW5jdGlvbiBkZXRhaWxzQ29tcG9uZW50KHRpdGxlVGV4dCwgZGV0YWlscywgcHJpb3JpdHksIGR1ZURhdGUpIHtcclxuLy8gICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4vLyAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy13aW5kb3dcIik7XHJcblxyXG4vLyAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuLy8gICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xvc2UtZGV0YWlscy1idXR0b25cIik7XHJcbi8vICAgY2xvc2VCdXR0b24uaW5uZXJUZXh0ID0gXCJDbG9zZVwiO1xyXG5cclxuLy8gICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4vLyAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzLXRpdGxlXCIpO1xyXG4vLyAgIHRpdGxlLmlubmVyVGV4dCA9IHRpdGxlVGV4dDtcclxuXHJcbi8vICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4vLyAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzLWRlc2NyaXB0aW9uXCIpO1xyXG4vLyAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRldGFpbHM7XHJcblxyXG4vLyAgIGZ1bmN0aW9uIHRvZ2dsZURpc3BsYXkob3ZlcmxheSwgdGFyZ2V0KSB7XHJcbi8vICAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJkaXNwbGF5LW5vbmVcIik7XHJcbi8vICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImRpc3BsYXktbm9uZVwiKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbi8vICAgICB0b2dnbGVEaXNwbGF5KG92ZXJsYXksIGRldGFpbHNXaW5kb3cpO1xyXG4vLyAgIH0pO1xyXG5cclxuLy8gICBjb250YWluZXIuYXBwZW5kKGNsb3NlQnV0dG9uLCB0aXRsZSwgZGVzY3JpcHRpb24pO1xyXG5cclxuLy8gICByZXR1cm4gY29udGFpbmVyO1xyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiBkZXRhaWxzQ29tcG9uZW50KHRpdGxlVGV4dCwgZGV0YWlscywgcHJpb3JpdHksIGR1ZURhdGUpIHtcclxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlscy1sYWJlbFwiKTtcclxuXHJcbiAgbGFiZWwuaW5uZXJUZXh0ID0gXCJQcm9qZWN0IEhvbWVcIiArIHRpdGxlVGV4dDtcclxuXHJcbiAgY29uc3QgZGV0YWlsc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtdGl0bGVcIik7XHJcbiAgZGV0YWlsc0VsZW1lbnQuaW5uZXJUZXh0ID0gZGV0YWlscyArIFwiRGV0YWlscyBJbm5lciBUZXh0XCI7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGRldGFpbHNDb21wb25lbnQ7XHJcbmV4cG9ydCBkZWZhdWx0IGRldGFpbHNDb21wb25lbnQ7XHJcbiIsImltcG9ydCB7XHJcbiAgb3ZlcmxheSxcclxuICBlZGl0V2luZG93LFxyXG4gIGNsb3NlRGV0YWlsc0J1dHRvbixcclxuICBjbG9zZUVkaXRCdXR0b24sXHJcbiAgZGV0YWlsc1dpbmRvdyxcclxufSBmcm9tIFwiLi4vZ2V0RWxlbWVudHNcIjtcclxuXHJcbmltcG9ydCB7IG9wZW5XaW5kb3csIGNsb3NlV2luZG93IH0gZnJvbSBcIi4uL3V0aWxpdHlGdW5jdGlvbnNcIjtcclxuaW1wb3J0IGRldGFpbHNDb21wb25lbnQgZnJvbSBcIi4vZGV0YWlsc1dpbmRvd1wiO1xyXG5cclxuZnVuY3Rpb24gdG9kb0NvbXBvbmVudCh0aXRsZVRleHQsIGRldGFpbHMsIHByaW9yaXR5LCBkdWVEYXRlKSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8taXRlbVwiKTtcclxuXHJcbiAgY29uc3QgZmlyc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcbiAgdGl0bGUuaW5uZXJUZXh0ID0gdGl0bGVUZXh0O1xyXG5cclxuICBmaXJzdERpdi5hcHBlbmQoaW5wdXQsIHRpdGxlKTtcclxuXHJcbiAgY29uc3Qgc2Vjb25kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgY29uc3QgZGV0YWlsc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgZGV0YWlsc0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1idXR0b25cIik7XHJcbiAgZGV0YWlsc0J1dHRvbi5pbm5lclRleHQgPSBcIkRldGFpbHNcIjtcclxuXHJcbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1idXR0b25cIik7XHJcbiAgZWRpdEJ1dHRvbi5pbm5lclRleHQgPSBcIkVkaXRcIjtcclxuXHJcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idXR0b25cIik7XHJcbiAgZGVsZXRlQnV0dG9uLmlubmVyVGV4dCA9IFwiRGVsZXRlXCI7XHJcblxyXG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJkYXRlXCIpO1xyXG4gIGRhdGUuaW5uZXJUZXh0ID0gZHVlRGF0ZTtcclxuXHJcbiAgc2Vjb25kRGl2LmFwcGVuZChkZXRhaWxzQnV0dG9uLCBlZGl0QnV0dG9uLCBkYXRlLCBkZWxldGVCdXR0b24pO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kKGZpcnN0RGl2LCBzZWNvbmREaXYpO1xyXG5cclxuICBkZXRhaWxzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBvcGVuV2luZG93KGRldGFpbHNXaW5kb3cpO1xyXG4gICAgLy8gZGV0YWlsc1dpbmRvdy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgLy8gZGV0YWlsc1dpbmRvdy5hcHBlbmQoXHJcbiAgICAvLyAgIGRldGFpbHNDb21wb25lbnQodGl0bGVUZXh0LCBkZXRhaWxzLCBwcmlvcml0eSwgZHVlRGF0ZSlcclxuICAgIC8vICk7XHJcbiAgICBkZXRhaWxzQ29tcG9uZW50KHRpdGxlVGV4dCwgZGV0YWlscywgcHJpb3JpdHksIGR1ZURhdGUpO1xyXG4gIH0pO1xyXG5cclxuICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBvcGVuV2luZG93KGVkaXRXaW5kb3cpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBjbG9zZUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAvLyAgIGNsb3NlV2luZG93KGVkaXRXaW5kb3cpO1xyXG4gIC8vIH0pO1xyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2RvQ29tcG9uZW50O1xyXG4iLCJjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblxyXG5pbXBvcnQgaG9tZVByb2plY3RzQXJyYXkgZnJvbSBcIi4vcHJvamVjdERhdGFcIjtcclxuaW1wb3J0IHtcclxuICBjb250ZW50LFxyXG4gIGhvbWUsXHJcbiAgYWRkQnV0dG9uLFxyXG4gIGRldGFpbHNCLFxyXG4gIG92ZXJsYXksXHJcbiAgY2xvc2VEZXRhaWxzQnV0dG9uLFxyXG4gIGNsb3NlRWRpdEJ1dHRvbixcclxuICBlZGl0V2luZG93LFxyXG4gIGVkaXRCdXR0b24sXHJcbiAgYWRkVGFza0J1dHRvbixcclxuICB0b2RvQ29udGVudCxcclxuICBlZGl0RGV0YWlsc0lucHV0LFxyXG4gIGVkaXRUaXRsZUlucHV0LFxyXG4gIHN1Ym1pdFRhc2tCdXR0b24sXHJcbiAgZGV0YWlsc1dpbmRvdyxcclxufSBmcm9tIFwiLi9kb21TdHVmZi9nZXRFbGVtZW50c1wiO1xyXG5cclxuaW1wb3J0IHsgb3BlbldpbmRvdywgY2xvc2VXaW5kb3cgfSBmcm9tIFwiLi9kb21TdHVmZi91dGlsaXR5RnVuY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgdG9kb0NvbXBvbmVudCBmcm9tIFwiLi9kb21TdHVmZi9jb21wb25lbnRzL3RvZG9JdGVtQ29tcG9uZW50XCI7XHJcblxyXG4vLyBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbi8vICAgb3BlbldpbmRvdyhlZGl0V2luZG93KTtcclxuLy8gfSk7XHJcblxyXG5jbG9zZUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjbG9zZVdpbmRvdyhlZGl0V2luZG93KTtcclxufSk7XHJcblxyXG5jbG9zZURldGFpbHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjbG9zZVdpbmRvdyhkZXRhaWxzV2luZG93KTtcclxuICBjb25zb2xlLmxvZyhcIkNsb3NlIERldGFpbHNcIik7XHJcbn0pO1xyXG5cclxuY29uc29sZS5sb2coaG9tZVByb2plY3RzQXJyYXkpO1xyXG5cclxuYm9keS5vbnNjcm9sbCA9ICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhcIkhlbGxvIGJvZHlcIik7XHJcbn07XHJcblxyXG50b2RvQ29udGVudC5vbnNjcm9sbCA9ICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhcIkhlbGxvLCB0b2RvLWNvbnRlbnRcIik7XHJcbn07XHJcblxyXG5jb250ZW50Lm9uc2Nyb2xsID0gKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiaGVsbG8sIGNvbnRlbnRcIik7XHJcbn07XHJcblxyXG4vLyBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbi8vICAgaG9tZVByb2plY3RzLmFkZFRhc2soe1xyXG4vLyAgICAgdGl0bGU6IFwiTmV3IFRhY2sgSGVyZVwiLFxyXG4vLyAgICAgZGV0YWlsczogXCJuZXcgRHVtbW55IFRhc2tcIixcclxuLy8gICAgIHByaW9yaXR5OiBcIkhpZ2hcIixcclxuLy8gICAgIGR1ZURhdGU6IFwiMTMvMTAvNDQwOFwiLFxyXG4vLyAgICAgY29tcGxldGU6IGZhbHNlLFxyXG4vLyAgIH0pO1xyXG4vLyB9KTtcclxuXHJcbnN1Ym1pdFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBob21lUHJvamVjdHMuYWRkVGFzayh7XHJcbiAgICB0aXRsZTogZWRpdFRpdGxlSW5wdXQudmFsdWUsXHJcbiAgICBkZXRhaWxzOiBlZGl0RGV0YWlsc0lucHV0LnZhbHVlLFxyXG4gICAgcHJpb3JpdHk6IFwiSGlnaFwiLFxyXG4gICAgZHVlRGF0ZTogXCIxMy8xMC80NDA4XCIsXHJcbiAgICBjb21wbGV0ZTogZmFsc2UsXHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGhvbWVQcm9qZWN0cy5lZGl0VGFzayhlZGl0V2luZG93KTtcclxufSk7XHJcblxyXG4vLyBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbi8vICAgY29uc29sZS5sb2coXCJIZW9vLFwiKTtcclxuLy8gfSk7XHJcblxyXG5jbGFzcyBQcm9qZWN0cyB7XHJcbiAgY29uc3RydWN0b3IoYXJyYXlPZlRvZG9zKSB7XHJcbiAgICB0aGlzLmFycmF5T2ZUb2RvcyA9IGFycmF5T2ZUb2RvcztcclxuICB9XHJcblxyXG4gIGRpc3BsYXlUYXNrcygpIHtcclxuICAgIHRoaXMuYXJyYXlPZlRvZG9zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgdG9kb0NvbnRlbnQuYXBwZW5kKFxyXG4gICAgICAgIHRvZG9Db21wb25lbnQoaXRlbS50aXRsZSwgaXRlbS5kZXRhaWxzLCBpdGVtLnByaW9yaXR5LCBpdGVtLmR1ZURhdGUpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkZFRhc2sob2JqZWN0KSB7XHJcbiAgICB0aGlzLmFycmF5T2ZUb2Rvcy51bnNoaWZ0KG9iamVjdCk7XHJcbiAgICB0b2RvQ29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY29uc29sZS5sb2coXCJIb21lIFByb2plY3RzIEFycmF5OiBcIiwgaG9tZVByb2plY3RzQXJyYXkpO1xyXG4gICAgdGhpcy5kaXNwbGF5VGFza3MoKTtcclxuICAgIGNsb3NlV2luZG93KGVkaXRXaW5kb3cpO1xyXG4gIH1cclxuICBlZGl0VGFzaygpIHtcclxuICAgIG9wZW5XaW5kb3coZWRpdFdpbmRvdyk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBob21lUHJvamVjdHMgPSBuZXcgUHJvamVjdHMoaG9tZVByb2plY3RzQXJyYXkpO1xyXG5ob21lUHJvamVjdHMuZGlzcGxheVRhc2tzKCk7XHJcbiJdLCJuYW1lcyI6WyJ0aXRsZSIsImRldGFpbHMiLCJwcmlvcml0eSIsImR1ZURhdGUiLCJjb21wbGV0ZSIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkZXRhaWxzV2luZG93IiwiZWRpdFdpbmRvdyIsIm92ZXJsYXkiLCJjbG9zZURldGFpbHNCdXR0b24iLCJjbG9zZUVkaXRCdXR0b24iLCJhZGRUYXNrQnV0dG9uIiwidG9kb0NvbnRlbnQiLCJlZGl0VGl0bGVJbnB1dCIsImVkaXREZXRhaWxzSW5wdXQiLCJzdWJtaXRUYXNrQnV0dG9uIiwib3BlbldpbmRvdyIsInRhcmdldCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImNsb3NlV2luZG93IiwiYWRkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ0aXRsZVRleHQiLCJjb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiZmlyc3REaXYiLCJpbnB1dCIsInR5cGUiLCJpbm5lclRleHQiLCJhcHBlbmQiLCJzZWNvbmREaXYiLCJkZXRhaWxzQnV0dG9uIiwiZWRpdEJ1dHRvbiIsImRlbGV0ZUJ1dHRvbiIsImRhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJvbnNjcm9sbCIsImhvbWVQcm9qZWN0cyIsImFkZFRhc2siLCJ2YWx1ZSIsImVkaXRUYXNrIiwiY29uc3RydWN0b3IiLCJhcnJheU9mVG9kb3MiLCJ0aGlzIiwiZGlzcGxheVRhc2tzIiwiZm9yRWFjaCIsIml0ZW0iLCJvYmplY3QiLCJ1bnNoaWZ0IiwiaW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==