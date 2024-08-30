<!-- 30/08/2024 -->

1. what is the issue? with useState (too many codes and rendering process)
2. useRef is used when we want to change only value not the UI PART (to avoid rendering)
3. useRef could be a good alternative as a function instead of useState.
4. ?? is nullish coalescing operator -->ex {true ? name : "user"} when condition is true, then show right value and false, show left value.
5. useState (change the UI every time it detectd the changes )
            vs
6. useRef do not cause component re-evalutation when changed(Sicne access the dom directly).--> so, developer needs to update the UI seperately.