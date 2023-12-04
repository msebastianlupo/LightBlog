function Submit({text, styles = "mar-t-4 rad-0-5 pad-1-5 hovbac-t"}){
    
    return (
        <div className="dis-f">
            <button className={styles} type="submit">{text}</button>
        </div>
    )
}

export default Submit