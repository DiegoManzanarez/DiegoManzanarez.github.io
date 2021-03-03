			function calculate()
			{
				var E=Number(document.getElementById("E").value);
		        var P=Number(document.getElementById("P").value);

		        var IMC=(P/(E*E));

		        document.getElementById("result").innerText=IMC;


        		if(IMC<=18.5)
       				 document.getElementById("result2").innerText = "Underweight";
      			else if (IMC>=18.6 && IMC<=24.9)
        			document.getElementById("result2").innerText = "Normal-Healthy";
     			else if (IMC>=25 && IMC<=29.9)
        			document.getElementById("result2").innerText = "Overweight";
     			else if (IMC>=30 && IMC<=34.9)
        			document.getElementById("result2").innerText = "Obese grade 1";
        		else if (IMC>=35 && IMC<=39.9)
        			document.getElementById("result2").innerText = "Obese grade 2";
        		 else if (IMC>40)
        			document.getElementById("result2").innerText = "Morbidly obese";

			}