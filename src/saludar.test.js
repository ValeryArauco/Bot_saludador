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


describe("Saludar de acuerdo a la hora del día en ingles", () => {
    it("deberia Saludar a Andrés en la mañana en ingles", () => {
        
        let resultado = saludar("Andrés", "masculino", 45, 8, "en") 
        expect(resultado).toEqual("Good morning, Mr. Andrés.");
    });

    it("deberia Saludar a Andrés en la tarde en ingles", () => {
        
        let resultado = saludar("Andrés", "masculino", 45, 15, "en") 
        expect(resultado).toEqual("Good afternoon, Mr. Andrés.");
    });

    it("deberia Saludar a Andrés en la noche en ingles", () => {
        
        let resultado = saludar("Andrés", "masculino", 45, 21, "en") 
        expect(resultado).toEqual("Good evening, Mr. Andrés.");
    });

});