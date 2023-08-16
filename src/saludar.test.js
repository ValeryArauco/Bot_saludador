import saludar from "./saludar";

describe("Saludar por nombre", () => {
    it("deberia Saludar a Andrés ", () => {
        
        let resultado = saludar("Andrés", "masculino", 15, 8, "es") 
        expect(resultado).toEqual("Buenos días, Andrés.");
    });

    
});

describe("Saludar de acuerdo al genero", () => {
    it("deberia Saludar a Andrés ", () => {
        
        let resultado = saludar("Andrés", "masculino", 45, 8, "es") 
        expect(resultado).toEqual("Buenos días, Sr. Andrés.");
    });

    it("deberia Saludar a María ", () => {
        
        let resultado = saludar("María", "femenino", 45, 8, "es") 
        expect(resultado).toEqual("Buenos días, Sra. María.");
    });
});