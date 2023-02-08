// fixed header
window.onscroll = function showHeader()
{
    const header = document.querySelector('#headerJs');
    const introH = document.getElementById('introJs').clientHeight;
    if (window.pageYOffset > introH+200) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
}

const registBtn = document.querySelector('.registrBtn')
const avtorizBtn = document.querySelector('.avtorizBtn')
const diologM = document.querySelector('.RegistrPop')
const diologA = document.querySelector('.AftorizPop')
const modal = document.querySelector('#modalReg')
const modal2 = document.querySelector('#modalAftoriz')
const closeBtn = document.querySelector('.close')
const closeBtn2 = document.querySelector('.close2')

const onRegBtn = document.querySelector('#voiti')
const onAftoBtn = document.querySelector('#registracia')
const openModal = (elem) =>
{
    elem.classList.add('show')
    elem.classList.remove('hide')
    document.body.style.overflow = 'hidden'
}
const closeModal = (elem) =>
{
    elem.classList.add('hide');
    elem.classList.remove('show')
    elem.classList.remove('showModal')
    document.body.style.overflow = ''
}
onRegBtn.onclick =()=>{
    closeModal(diologM)
    openModal(diologA)
}
onAftoBtn.onclick =()=>{
    closeModal(diologA)
    openModal(diologM)
}
registBtn.onclick = () => {
    closeModal(diologA)
    openModal(diologM)
}
closeBtn.onclick = () => closeModal(diologM)
closeBtn2.onclick = () => closeModal(diologA)
avtorizBtn.onclick = ()=>{
    closeModal(diologM)
    openModal(diologA)
}
diologM.addEventListener('click', (e) =>
{
    if (!modal.contains(e.target) && diologM.classList.contains('show')) 
    closeModal(diologM)
})
diologA.addEventListener('click', (e) =>
{
    if (!modal2.contains(e.target) && diologA.classList.contains('show')) 
    closeModal(diologA)
})
// for password
const newPasBtn = document.querySelector('.eyeForNew')
const newPas = document.getElementById('new')
const passPasBtn = document.querySelector('.eyeForPass')
const passPas = document.getElementById('pass')
const passwordAftoriz = document.getElementById('password')
const passwordBtn = document.querySelector('.eyeForpasword')
const passwordMobA = document.getElementById('newMob')
const passwordMobBtn = document.querySelector('.eyeForMob2')
const passwordMobPass = document.getElementById('passMob')
const passwordMobPassBtn = document.querySelector('.eyeForPassMob2')
const AMobPass = document.getElementById('Mobpassword')
const AMobPassBtn = document.querySelector('.eyeMobpassword')



newPasBtn.onclick = (e) => changeType(newPas)
passPasBtn.onclick = (e) => changeType(passPas)
passwordBtn.onclick = (e) => changeType(passwordAftoriz)
passwordMobBtn.onclick = (e) => changeType(passwordMobA)
passwordMobPassBtn.onclick = (e) => changeType(passwordMobPass)
AMobPassBtn.onclick = (e) => changeType(AMobPass)

// onsubmit



const changeModal = (elem) =>
{
    elem.classList.add('showModal')
    elem.classList.remove('hide')
    document.body.style.overflow = 'hidden'
}
// mobile
const MobForm1 = document.querySelector('.mobForm1')
const regMob1 = document.querySelector('.regMob1')
const regMob2 = document.querySelector('.regMob2')
const back = document.querySelector('.back')



// back
back.onclick = () =>
{
    closeModal(regMob2)
    changeModal(regMob1)
    back.classList.remove('show')
    back.classList.add('hide')
}
// voiti
const voiti1 = document.querySelector('#voiti1')
const regis2 = document.querySelector('#registracia2')
const emailMob = document.querySelector('#Mobemail2')
const formAMob = document.querySelector('#formAmobail')
voiti1.onclick = () =>
{
    closeModal(diologM)
    openModal(diologA)
}
regis2.onclick = () =>
{
    closeModal(diologA)
    openModal(diologM)
}
