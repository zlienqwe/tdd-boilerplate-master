describe("Mommify",function(){
  it("should return x when given x",function(){
      var inputStr = "x",
          exptectedResult = "x";


      var result = mommify(inputStr);
      expect(result).toEqual(exptectedResult);
      })


  it("should return mommy when given a",function(){
      var inputStr = "a",
          exptectedResult = "mommy";


      var result = mommify(inputStr);
    expect(result).toEqual(exptectedResult);
    })


  it("should return mommy when given a vowel",function(){
      var inputStrList = ["a","e","i","o","u"],
          exptectedResult = "mommy";

          for(var i=0; i<inputStrList.length; i++){
              var result = mommify(inputStrList[i]);
              expect(result).toEqual(exptectedResult);

          }
    })

   it("should return hmommy when given he",function(){
        var inputStr = "he",
            exptectedResult = "hmommy";


        var result = mommify(inputStr);
      expect(result).toEqual(exptectedResult);
      })


    it("should return ship when given ship",function(){
           var inputStr = "ship",
               exptectedResult = "ship";


           var result = mommify(inputStr);
         expect(result).toEqual(exptectedResult);
         })

    it("should return shipshipip when given shipshipip",function(){
           var inputStr = "shipshipip",
               exptectedResult = "shipshipip";


           var result = mommify(inputStr);
         expect(result).toEqual(exptectedResult);
         })


    it("should return hmommyrtrmommyrmommytttmommytttmommy when given heartrereeiettteettteeet",function(){
               var inputStr = "heeeheee",
                   exptectedResult = "hmommyhmommy";


               var result = mommify(inputStr);
             expect(result).toEqual(exptectedResult);
             })


})
