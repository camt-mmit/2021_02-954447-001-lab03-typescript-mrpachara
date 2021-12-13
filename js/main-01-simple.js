"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.cmp-inputs-container input[type="number"]');
    inputs.forEach((elem) => {
        elem.addEventListener('change', () => {
            let total = 0;
            inputs.forEach((elem) => (total += elem.valueAsNumber));
            const outputElem = document.querySelector('output.cmp-result');
            if (outputElem) {
                outputElem.value = total.toString();
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi0wMS1zaW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvanMvbWFpbi0wMS1zaW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFDakQsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUN0Qyw0Q0FBNEMsQ0FDN0MsQ0FBQztJQUNGLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUN0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUNuQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDZCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN4RCxNQUFNLFVBQVUsR0FDZCxRQUFRLENBQUMsYUFBYSxDQUFvQixtQkFBbUIsQ0FBQyxDQUFDO1lBQ2pFLElBQUksVUFBVSxFQUFFO2dCQUNkLFVBQVUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3JDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MSW5wdXRFbGVtZW50PihcbiAgICAnLmNtcC1pbnB1dHMtY29udGFpbmVyIGlucHV0W3R5cGU9XCJudW1iZXJcIl0nXG4gICk7XG4gIGlucHV0cy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgaW5wdXRzLmZvckVhY2goKGVsZW0pID0+ICh0b3RhbCArPSBlbGVtLnZhbHVlQXNOdW1iZXIpKTtcbiAgICAgIGNvbnN0IG91dHB1dEVsZW0gPVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxPdXRwdXRFbGVtZW50Pignb3V0cHV0LmNtcC1yZXN1bHQnKTtcbiAgICAgIGlmIChvdXRwdXRFbGVtKSB7XG4gICAgICAgIG91dHB1dEVsZW0udmFsdWUgPSB0b3RhbC50b1N0cmluZygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pO1xuIl19