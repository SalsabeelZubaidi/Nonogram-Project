const colClues = [[3, 1], [2], [2, 1], [1], [3]];
			const rowClues = [[4], [3], [1, 1], [1], [1, 1, 1]];  

			function toggleCell(x){     
				x.classList.toggle('clicked');   // add/remove "clicked" class to the cell 
			}

			function checkSolution(){       
				const solution = [];       
				const cells = document.getElementsByClassName('cell');       
				for (var i = 0; i < cells.length; i++) {           
					solution[i] = cells[i].classList.contains('clicked') ? 1 : 0;       
				}  // the solution is an array, when the cell is clicked its 1 and 0 when its not
				const isCorrect = validateSolution(solution, rowClues, colClues);        
				alert(isCorrect ? 'Congratulations! You Solved The Nonogram.' : 'Wrong Answer, Try Again.');   
			}

			function validateSolution(solution, rowClues, colClues){
				const rowCount = rowClues.length;       
				const colCount = colClues.length;
									 
				for (var i = 0; i < rowCount; i++){  //line by line           
					const rowStart = i * colCount;          
					const rowEnd = rowStart + colCount;           
					const row = solution.slice(rowStart, rowEnd); // slice cuts the array to show the row         
					const isValid = validateArray(row, rowClues[i]);           
					if (!isValid) 
						return false; // breaks the loop     
			    }
								  
				for (let j = 0; j < colCount; j++){ //start colume
					const col = [];           
					for (var i = 0; i < rowCount; i++) { 
						col.push(solution[i * colCount + j]);
					}           
					const isValid = validateArray(col, colClues[j]);
					if (!isValid)
						return false;   // breaks the loop    
				}
				return true;   
			}
					
			function validateArray(arr, clues){ 
				const str = arr.join('');
				var regexp = "";
				for(var i=0; i<clues.length; i++){
					regexp+= '1{' + clues[i] + '}?0*';
				}
				const regex = new RegExp(regexp); //ready method
				return regex.test(str);   
			}

		