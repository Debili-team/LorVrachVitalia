import React, {useCallback, useState} from 'react';
import classes from "./Botter.module.scss";
import 'font-awesome/css/font-awesome.min.css';


const Botter = ((props) => {
    const [state, setState] = useState({
        contacts: false,
        address: false,
        nav: false
    });
    let contacts =  [classes.Contacts];
    if (state.contacts === true){
        contacts = [classes.ContactsOpen]
    }
    let address =  [classes.Adress]
    if (state.address === true){
        address = [classes.AdressOpen]
    }
    let nav =  [classes.Nav]
    if (state.nav === true){
        nav = [classes.NavOpen]
    }
    const openContacts = useCallback(()=> {
        setState(prev => {
            return {
                ...prev,
                contacts: !prev.contacts
            }
        })
    },[])
    const openAdress = useCallback(()=> {
        setState(prev => {
            return {
                ...prev,
                address: !prev.address
            }
        })
    },[])
    const openNav = useCallback(()=> {
        setState(prev => {
            return {
                ...prev,
                nav: !prev.nav
            }
        })
    },[])



    return (
            <div style={{marginTop:props.top, marginLeft: props.left}} className={classes.Botter}>
                <div className={classes.Wrapper}>
                    <div onClick={openContacts} className={classes.Button}>Контакты
                        <i className="fa fa-angle-right fa-2x" aria-hidden="true"/>
                    </div>
                    <div className={contacts.join(" ")}>
                        <p className={classes.name}>Кот Вячеслав Федорович</p>
                        <p className={classes.info}>(067) 5065206  (8.00 — 20.00)</p>
                        <p className={classes.info}>example@example.com</p>
                        <p className={classes.info}>@theBestDoctor</p>
                        <p className={classes.info}>Задайте Вопрос</p>

                    </div>
                    <div onClick={openAdress} className={classes.Button}>Адресс
                        <i className="fa fa-angle-right fa-2x" aria-hidden="true"/></div>
                    <div className={address.join(" ")}>
                        <p className={classes.info}>клиника Медиком на Печерске</p>
                        <p className={classes.info}>ул. Василия Тютюнника (Анри Барбюса) 37/1</p>
                        <br/>
                        <p className={classes.info}>клиника Медиком на Оболони</p>
                        <p className={classes.info}>ул. Героев Сталинграда 6-Д</p>

                    </div>
                    <div onClick={openNav} className={classes.Button}>Навигация сайта
                        <i className="fa fa-angle-right fa-2x" aria-hidden="true"/></div>
                    <div className={nav.join(" ")}>
                        <p className={classes.status}>Главная</p>
                        <p className={classes.status}>Статьи</p>
                        <p className={classes.status}>Вопросы</p>

                    </div>
                </div>
                <p style={{fontWeight:"600", marginLeft: "20px", marginTop: "20px", paddingBottom: "30px"}}  className={classes.info}>@ALL RIGHTS RESERVED | 2020</p>
            </div>

    );
});


export default Botter;