let MyResume=
{
    "General": 
    {
      "Name": "Deepak M",
      "Email": "deepak6575@gamil.com",
      "Phone": 9876543210,
      "Degree": "B.com",
      "Native" : "kerala",
      "Locality": 
      {
        "postalCode": 600064,
        "city": "Chennai",
        "state": "Tamilnadu",
        "country": "India"
      },
    },
    "Qualification": 
    [
      {
        "College": "GNC",
        "Department": "Commerce",
      }
    ],
    "Languages": 
    [
       "Tamil",
       "English",
       "Malayalam",
    ],
  }
  for (let x in MyResume) {
    console.log(x + ": "+ MyResume[x])
 }
  console.log(MyResume);
  
  // Using 'for' loop 
for (let i = 0; i < MyResume.Languages.length; i++) {
    console.log(MyResume.Languages[i]);
  }
  