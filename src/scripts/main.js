AOS.init();

const dataEvento = new Date("Nov 13, 2024  14:00:00");
const timeStampDoEvento = dataEvento.getTime();

const contaAshoras = setInterval(function(){
    const agora = new Date();
    const timeStempAtual = agora.getTime();


    const DistanciAteOEvento = timeStampDoEvento - timeStempAtual;

    const Diaemms = 1000*60*60*24;
    const horasemms = 1000 * 60 * 60;
    const minutosemms = 1000 * 60;

    const DiasAteoEvento = Math.floor( DistanciAteOEvento / Diaemms);
    const HorasAteoEvento = Math.floor((DistanciAteOEvento % Diaemms) / horasemms);
    const minutosAteoEvento = Math.floor((DistanciAteOEvento % horasemms) / minutosemms);
    const segundosAteoEvento = Math.floor((DistanciAteOEvento % minutosemms) / 1000);


    document.getElementById('contador').innerHTML = `${DiasAteoEvento}d ${HorasAteoEvento}h ${minutosAteoEvento}m ${segundosAteoEvento}s`;
    
    if(DistanciAteOEvento < 0){
        clearInterval(contaAshoras)
        document.getElementById('contator').innerHTML = `O evento foi expirado`
    }

}, 1000)