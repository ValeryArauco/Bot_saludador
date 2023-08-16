import saludar from "./saludar";

describe("Saludar por nombre", () => {
    it("deberia Saludar a Andrés ", () => {
        
        let resultado = saludar("Andrés", "masculino", 15, 8, "es") 
        expect(resultado).toEqual("Buenos días, Andrés.");
    });

    
});

// describe("Saludar por nombre", () => {
//     it("deberia Saludar a Andrés ", () => {
//         let kbot = new Kbot();
//         let resultado = kbot.saludar("Andrés", 7) 
//         expect(resultado).toEqual("Buenos días Andrés");
//     });

    
// });