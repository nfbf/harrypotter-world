export class Util {

    public static traduzirNomeCasa(casa : string){
        if(casa.toLocaleLowerCase().trim() == "slytherin")
            return "Sonserina";
        else if(casa.toLocaleLowerCase().trim() == "gryffindor")
            return "Grifinória";
        else if(casa.toLocaleLowerCase().trim() == "hufflepuff")
            return "Lufa-Lufa"
        else if(casa.toLocaleLowerCase().trim() == "ravenclaw")
            return "Corvinal"
    }

    public static traduzirSexoPersonagem(sexo : string){
        return (sexo.toLowerCase().trim() == "male") ? "Masculino" : "Feminino";
    }

    public static formartarDataBrasil(data : string){
        return data.replace("-", "/").replace("-", "/");
    }

}