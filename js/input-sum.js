function calculateSum(parentContainer) {
    const inputs = parentContainer.querySelectorAll('.cmp-inputs-container .cmp-input-container input[type="number"]');
    let total = 0;
    inputs.forEach((elem) => (total += elem.valueAsNumber));
    const output = parentContainer.querySelector('output.cmp-result');
    if (output) {
        output.value = total.toString();
    }
}
function generateContainer(parentContainer) {
    const inputContainers = parentContainer.querySelectorAll('.cmp-inputs-container .cmp-input-container');
    inputContainers.forEach((inputContainer, i) => {
        const inputNo = inputContainer.querySelector('.cmp-input-no');
        if (inputNo) {
            inputNo.textContent = (i + 1).toString();
        }
        const deleteCmd = inputContainer.querySelector('.cmd-delete-input');
        if (deleteCmd) {
            deleteCmd.disabled = false;
        }
    });
    if (inputContainers.length === 1) {
        const deleteCmd = parentContainer.querySelector('.cmp-inputs-container .cmd-delete-input');
        if (deleteCmd) {
            deleteCmd.disabled = true;
        }
    }
    calculateSum(parentContainer);
}
function add(parentContainer) {
    const tmpInput = document.querySelector('template#tmp-input');
    if (tmpInput) {
        const fragment = tmpInput.content.cloneNode(true);
        const container = parentContainer.querySelector('.cmp-inputs-container');
        if (container) {
            container.append(fragment);
        }
        generateContainer(parentContainer);
    }
}
function remove(container, parentContainer) {
    container.remove();
    generateContainer(parentContainer);
}
export function create(parentContainer) {
    parentContainer.addEventListener('click', (ev) => {
        const elem = ev.target;
        if (elem.matches('.cmd-add-input')) {
            add(parentContainer);
        }
        else if (elem.matches('.cmd-delete-input')) {
            const container = elem.closest('.cmp-input-container');
            if (container) {
                remove(container, parentContainer);
            }
        }
    });
    const inputsContainer = parentContainer.querySelector('.cmp-inputs-container');
    if (inputsContainer) {
        inputsContainer.addEventListener('change', (ev) => {
            const elem = ev.target;
            if (elem.matches('input[type="number"]')) {
                calculateSum(parentContainer);
            }
        });
        add(parentContainer);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc3VtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2pzL2lucHV0LXN1bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxTQUFTLFlBQVksQ0FBQyxlQUE2QjtJQUNqRCxNQUFNLE1BQU0sR0FBRyxlQUFlLENBQUMsZ0JBQWdCLENBQzdDLGlFQUFpRSxDQUNsRSxDQUFDO0lBRUYsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDeEQsTUFBTSxNQUFNLEdBQUcsZUFBZSxDQUFDLGFBQWEsQ0FBWSxtQkFBbUIsQ0FBQyxDQUFDO0lBQzdFLElBQUksTUFBTSxFQUFFO1FBQ1YsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDakM7QUFDSCxDQUFDO0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxlQUE2QjtJQUN0RCxNQUFNLGVBQWUsR0FBRyxlQUFlLENBQUMsZ0JBQWdCLENBQ3RELDRDQUE0QyxDQUM3QyxDQUFDO0lBQ0YsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM1QyxNQUFNLE9BQU8sR0FBRyxjQUFjLENBQUMsYUFBYSxDQUFZLGVBQWUsQ0FBQyxDQUFDO1FBQ3pFLElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUMxQztRQUVELE1BQU0sU0FBUyxHQUNiLGNBQWMsQ0FBQyxhQUFhLENBQWEsbUJBQW1CLENBQUMsQ0FBQztRQUNoRSxJQUFJLFNBQVMsRUFBRTtZQUNiLFNBQVMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ2hDLE1BQU0sU0FBUyxHQUFHLGVBQWUsQ0FBQyxhQUFhLENBQzdDLHlDQUF5QyxDQUMxQyxDQUFDO1FBRUYsSUFBSSxTQUFTLEVBQUU7WUFDYixTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUMzQjtLQUNGO0lBRUQsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFFRCxTQUFTLEdBQUcsQ0FBQyxlQUE2QjtJQUN4QyxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFjLG9CQUFvQixDQUFDLENBQUM7SUFDM0UsSUFBSSxRQUFRLEVBQUU7UUFDWixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQXVCLENBQUM7UUFFeEUsTUFBTSxTQUFTLEdBQUcsZUFBZSxDQUFDLGFBQWEsQ0FDN0MsdUJBQXVCLENBQ3hCLENBQUM7UUFDRixJQUFJLFNBQVMsRUFBRTtZQUNiLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDNUI7UUFFRCxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUNwQztBQUNILENBQUM7QUFFRCxTQUFTLE1BQU0sQ0FBQyxTQUF1QixFQUFFLGVBQTZCO0lBQ3BFLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUVuQixpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBRUQsTUFBTSxVQUFVLE1BQU0sQ0FBQyxlQUE2QjtJQUNsRCxlQUFlLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7UUFDL0MsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLE1BQW9CLENBQUM7UUFFckMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDbEMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3RCO2FBQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7WUFDNUMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBZSxzQkFBc0IsQ0FBQyxDQUFDO1lBRXJFLElBQUksU0FBUyxFQUFFO2dCQUNiLE1BQU0sQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLENBQUM7YUFDcEM7U0FDRjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxlQUFlLEdBQUcsZUFBZSxDQUFDLGFBQWEsQ0FDbkQsdUJBQXVCLENBQ3hCLENBQUM7SUFFRixJQUFJLGVBQWUsRUFBRTtRQUNuQixlQUFlLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDaEQsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLE1BQWtCLENBQUM7WUFFbkMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLEVBQUU7Z0JBQ3hDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUMvQjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQ3RCO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEVUIGZyb20gJy4vZWxlbWVudC10eXBlLmpzJztcblxuZnVuY3Rpb24gY2FsY3VsYXRlU3VtKHBhcmVudENvbnRhaW5lcjogRVQuQ29udGFpbmVyKTogdm9pZCB7XG4gIGNvbnN0IGlucHV0cyA9IHBhcmVudENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsPEVULklucHV0PihcbiAgICAnLmNtcC1pbnB1dHMtY29udGFpbmVyIC5jbXAtaW5wdXQtY29udGFpbmVyIGlucHV0W3R5cGU9XCJudW1iZXJcIl0nXG4gICk7XG5cbiAgbGV0IHRvdGFsID0gMDtcbiAgaW5wdXRzLmZvckVhY2goKGVsZW0pID0+ICh0b3RhbCArPSBlbGVtLnZhbHVlQXNOdW1iZXIpKTtcbiAgY29uc3Qgb3V0cHV0ID0gcGFyZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3I8RVQuT3V0cHV0Pignb3V0cHV0LmNtcC1yZXN1bHQnKTtcbiAgaWYgKG91dHB1dCkge1xuICAgIG91dHB1dC52YWx1ZSA9IHRvdGFsLnRvU3RyaW5nKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVDb250YWluZXIocGFyZW50Q29udGFpbmVyOiBFVC5Db250YWluZXIpOiB2b2lkIHtcbiAgY29uc3QgaW5wdXRDb250YWluZXJzID0gcGFyZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGw8RVQuQ29udGFpbmVyPihcbiAgICAnLmNtcC1pbnB1dHMtY29udGFpbmVyIC5jbXAtaW5wdXQtY29udGFpbmVyJ1xuICApO1xuICBpbnB1dENvbnRhaW5lcnMuZm9yRWFjaCgoaW5wdXRDb250YWluZXIsIGkpID0+IHtcbiAgICBjb25zdCBpbnB1dE5vID0gaW5wdXRDb250YWluZXIucXVlcnlTZWxlY3RvcjxFVC5OdW1iZXI+KCcuY21wLWlucHV0LW5vJyk7XG4gICAgaWYgKGlucHV0Tm8pIHtcbiAgICAgIGlucHV0Tm8udGV4dENvbnRlbnQgPSAoaSArIDEpLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlQ21kID1cbiAgICAgIGlucHV0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3I8RVQuQ29tbWFuZD4oJy5jbWQtZGVsZXRlLWlucHV0Jyk7XG4gICAgaWYgKGRlbGV0ZUNtZCkge1xuICAgICAgZGVsZXRlQ21kLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICB9KTtcblxuICBpZiAoaW5wdXRDb250YWluZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGRlbGV0ZUNtZCA9IHBhcmVudENvbnRhaW5lci5xdWVyeVNlbGVjdG9yPEVULkNvbW1hbmQ+KFxuICAgICAgJy5jbXAtaW5wdXRzLWNvbnRhaW5lciAuY21kLWRlbGV0ZS1pbnB1dCdcbiAgICApO1xuXG4gICAgaWYgKGRlbGV0ZUNtZCkge1xuICAgICAgZGVsZXRlQ21kLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjYWxjdWxhdGVTdW0ocGFyZW50Q29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gYWRkKHBhcmVudENvbnRhaW5lcjogRVQuQ29udGFpbmVyKTogdm9pZCB7XG4gIGNvbnN0IHRtcElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxFVC5UZW1wbGF0ZT4oJ3RlbXBsYXRlI3RtcC1pbnB1dCcpO1xuICBpZiAodG1wSW5wdXQpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IHRtcElucHV0LmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIGFzIEVULlRlbXBsYXRlQ29udGVudDtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHBhcmVudENvbnRhaW5lci5xdWVyeVNlbGVjdG9yPEVULkNvbnRhaW5lcj4oXG4gICAgICAnLmNtcC1pbnB1dHMtY29udGFpbmVyJ1xuICAgICk7XG4gICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgY29udGFpbmVyLmFwcGVuZChmcmFnbWVudCk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVDb250YWluZXIocGFyZW50Q29udGFpbmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmUoY29udGFpbmVyOiBFVC5Db250YWluZXIsIHBhcmVudENvbnRhaW5lcjogRVQuQ29udGFpbmVyKSB7XG4gIGNvbnRhaW5lci5yZW1vdmUoKTtcblxuICBnZW5lcmF0ZUNvbnRhaW5lcihwYXJlbnRDb250YWluZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKHBhcmVudENvbnRhaW5lcjogRVQuQ29udGFpbmVyKSB7XG4gIHBhcmVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgIGNvbnN0IGVsZW0gPSBldi50YXJnZXQgYXMgRVQuQ29tbWFuZDtcblxuICAgIGlmIChlbGVtLm1hdGNoZXMoJy5jbWQtYWRkLWlucHV0JykpIHtcbiAgICAgIGFkZChwYXJlbnRDb250YWluZXIpO1xuICAgIH0gZWxzZSBpZiAoZWxlbS5tYXRjaGVzKCcuY21kLWRlbGV0ZS1pbnB1dCcpKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBlbGVtLmNsb3Nlc3Q8RVQuQ29udGFpbmVyPignLmNtcC1pbnB1dC1jb250YWluZXInKTtcblxuICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICByZW1vdmUoY29udGFpbmVyLCBwYXJlbnRDb250YWluZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgaW5wdXRzQ29udGFpbmVyID0gcGFyZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3I8RVQuQ29udGFpbmVyPihcbiAgICAnLmNtcC1pbnB1dHMtY29udGFpbmVyJ1xuICApO1xuXG4gIGlmIChpbnB1dHNDb250YWluZXIpIHtcbiAgICBpbnB1dHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KSA9PiB7XG4gICAgICBjb25zdCBlbGVtID0gZXYudGFyZ2V0IGFzIEVULklucHV0O1xuXG4gICAgICBpZiAoZWxlbS5tYXRjaGVzKCdpbnB1dFt0eXBlPVwibnVtYmVyXCJdJykpIHtcbiAgICAgICAgY2FsY3VsYXRlU3VtKHBhcmVudENvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBhZGQocGFyZW50Q29udGFpbmVyKTtcbiAgfVxufVxuIl19