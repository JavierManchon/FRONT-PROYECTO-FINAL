import React, { useEffect, useRef, useState } from "react";
import "./_footerComponent.scss";
{/*
<div className="container-renderized_visual">
    <form className={template.defaultStyles[0]} style={{ backgroundColor: bgFormColor }} ref={visualForm}>
        {Array.from({ length: template.defaultContent.countChildren }).map((_, index) => (
            <div key={`renderized_${index}`}>
                <div key={`child_${index}`} className='form-div' ref={visualDiv}>
                    {Array.from({ length: template.defaultContent.countGrandson }).map((_, i) => (
                        <React.Fragment key={`visual_${index}_${i}`}>
                            <label className={template.defaultStyles[1]} htmlFor={`id${index}_${i}`} style={{ color: labelFontColor, fontSize: labelFontSize, fontWeight: labelFontWeight, textDecoration: textDecoration }} ref={visualLabel}>{labelValues[index][i]}</label>
                            <input className={template.defaultStyles[2]} key={`visual_input_${index}_${i}`} id={`id${index}_${i}`} name={`id${index}_${i}`} type={template.defaultContent.type} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        ))}
        <button className={template.defaultStyles[3]} style={{ backgroundColor: bgButtonColor, fontSize: buttonFontSize, color: buttonFontColor, fontWeight: buttonFontWeight, borderRadius: typeof buttonBorderRadius === 'number' ? `${buttonBorderRadius}px` : buttonBorderRadius }} ref={visualButton}>{buttonValue}</button>
    </form>
</div>

<div className='container-renderized_html'>
    <div className='title-btn'>
        <h4>HTML</h4>
        <button onClick={() => copyToClipboard('html')}>Copiar</button>
    </div>
    <div id='html' className='html'>
        <span>{`<${template.elementType} class=${template.defaultStyles[0]} action="" method="POST">`}</span>
        {Array.from({ length: template.defaultContent.countChildren }).map((_, index) => (
            <React.Fragment key={`html_${index}`}>
                <span>{'<div>'}</span>
                {Array.from({ length: template.defaultContent.countGrandson }).map((_, i) => (
                    <React.Fragment key={`html_in_${i}`}>
                        <span> 
                            {'<' + (template.defaultContent ? template.defaultContent.children[0] : null) + ` for=id${index + 1}>`}
                            {labelValues[index][i]}
                            {'</' + (template.defaultContent ? template.defaultContent.children[0] : null) + '>'}
                        </span>
                        <span> 
                            {'<' + (template.defaultContent ? template.defaultContent.children[1] : null) + ` type=${template.defaultContent.type} id=id${index + 1}_${i + 1} name=id${index + 1}>`}
                            {'</' + (template.defaultContent ? template.defaultContent.children[1] : null) + '>'}
                        </span>
                    </React.Fragment>
                ))}
                <span>{'</div>'}</span>
            </React.Fragment>
        ))}
        <span>{`<${template.defaultContent ? template.defaultContent.grandson[0] : null} type="submit">`}{buttonValue}</span>
        <span>{`</${template.defaultContent ? template.defaultContent.grandson[0] : null}>`}</span>
        <span>{`</${template.elementType}>`}</span>
    </div>
</div>

 */}
const FooterComponent = ({ template }) => {
  console.log(template)
    const [liValues, setLiValues] = useState(() => {
        if (template.edit.textArray > 0) {
          return [...template.edit.textArray];
        } else {
          return Array.from({ length: template.defaultContent.countGrandson }, () => "Item");
        }
      });
    
      const [bgColor, setBgColor] = useState(template.edit.bgColorNav ? template.edit.bgColorNav : '');
      const [fontColor, setFontColor] = useState(template.edit.colorText ? template.edit.colorText : '');
      const [fontSize, setFontSize] = useState(template.edit.fontSizeText ? template.edit.fontSizeText : '');
      const [fontWeight, setFontWeight] = useState(template.edit.fontWeightText ? template.edit.fontWeightText : '');
      const [textDecoration, setTextDecoration] = useState(template.edit.textDecorationText ? template.edit.textDecorationText : '');
      const [navStyles, setNavStyles] = useState([]);
      const [ulStyles, setUlStyles] = useState([]);
      const [liStyles, setLiStyles] = useState([]);
      const [aTag, setATag] = useState(false);

  const handleLiChange = (index) => (event) => {
    const newLiValues = [...liValues];
    newLiValues[index] = event.target.value;
    setLiValues(newLiValues);
  };

  const handleBgColor = (event) => {
    setBgColor(event.target.value);
  };

  const handleFontColor = (event) => {
    setFontColor(event.target.value);
  };

  const handleFontSize = (event) => {
    setFontSize(`${event.target.value}px`);
  };

  const handleFontWeight = (event) => {
    setFontWeight(event.target.value);
  };

  const handleTextDecoration = (event) => {
    setTextDecoration(event.target.value);
  };

  const visualNav = useRef(null);
  useEffect(() => {
    if (visualNav.current && visualUl.current) {
      const computedNavStyles = window.getComputedStyle(visualNav.current);

      setNavStyles({
        backgroundColor: computedNavStyles.backgroundColor,
        width: "100%",
        padding: computedNavStyles.padding,
      });
    }
  }, [bgColor]);

  const visualUl = useRef(null);
  useEffect(() => {
    if (visualUl.current) {
      const computedStyles = window.getComputedStyle(visualUl.current);
      setUlStyles({
        display: computedStyles.display,
        flexDirection: computedStyles.flexDirection,
        width: "100%",
        gap: computedStyles.gap,
        justifyContent: computedStyles.justifyContent,
      });
    }
  }, []);

  const visualLi = useRef(null);
  useEffect(() => {
    if (visualLi.current) {
      const computedStyles = window.getComputedStyle(visualLi.current);
      setLiStyles({
        color: computedStyles.color,
        fontSize: computedStyles.fontSize,
        fontWeight: computedStyles.fontWeight,
        textDecoration: computedStyles.textDecoration,
      });
    }
  }, [
    fontColor,
    fontSize,
    fontWeight,
    textDecoration
  ]);

  const getFirstWord = (text) => {
    if (text) {
      const words = text.split(" ");
      return words[0];
    }
    return null;
  };

  const copyToClipboard = (elementId) => {
    const element = document.getElementById(elementId);
    const range = document.createRange();
    range.selectNodeContents(element);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();
  };

  const handleATag = () => {
    setATag(!aTag);
  };

  return (
    <div className="container-pages-default-styles">
      <div className="container-editor">
        <p>
          {"<"}
          {template.elementType}
          {">"}
        </p>
        <p>
          {"<"}
          {template.defaultContent ? template.defaultContent.children[0] : null}
          {">"}
        </p>
        {Array.from({ length: template.defaultContent.countGrandson }).map(
          (_, index) => (
            <React.Fragment key={index}>
              <p>
                {"<"}
                {template.defaultContent ? template.defaultContent.grandson[0] : null}
                {">"}
                {aTag ? '<a href="">' : null}
                <input
                  type="text"
                  onChange={handleLiChange(index)}
                  maxLength={12}
                  placeholder="Máximo 12 caracteres"
                />
                {aTag ? "</a>" : null}
                {"</"}
                {template.defaultContent ? template.defaultContent.grandson[0] : null}
                {">"}
              </p>
            </React.Fragment>
          )
        )}
        <p>
          {"</"}
          {template.defaultContent ? template.defaultContent.children[0] : null}
          {">"}
        </p>
        <p>
          {"</"}
          {template.elementType}
          {">"}
        </p>
      </div>

      <button onClick={handleATag}>Añadir enlace a {"li"}</button>

      <div className="styles-editor">
        <label htmlFor="bgColor">
          <p>Color de Fondo</p>
          <input
            type="color"
            id="bgColor"
            onChange={handleBgColor}
          />
        </label>

        <label htmlFor="fontColor">
          <p>Color de Letra</p>
          <input
            type="color"
            id="fontColor"
            onChange={handleFontColor}
          />
        </label>

        <label htmlFor="fontSize">
          <p>Tamaño de Letra</p>
          <input
            type="number"
            id="fontSize"
            min={12}
            max={20}
            onChange={handleFontSize}
          />
        </label>

        <label htmlFor="fontWeight">
          <p>Negrita</p>
          <div>
          <input 
            type="checkbox" 
            name='fontWeight' 
            value="bold" 
            checked={fontWeight === "bold"}
            onChange={(event) => {
                const isChecked = event.target.checked;
                const newValue = isChecked ? "bold" : "normal";
                handleFontWeight(newValue);
            }}
          />
          </div>
        </label>

        <label htmlFor="textDecoration">
          <p>Subrayado</p>
          <div>
          <input 
            type="checkbox" 
            name='textDecoration' 
            value="underline" 
            checked={textDecoration === "underline"}
            onChange={(event) => {
                const isChecked = event.target.checked;
                const newValue = isChecked ? "underline" : "none";
                handleTextDecoration(newValue);
            }}
          />
          </div>
        </label>
      </div>

      <div className="container-renderized_visual">
        <nav
          className={template.defaultStyles[0]}
          style={{backgroundColor: bgColor}}
          ref={visualNav}
        >
          <ul className={template.defaultStyles[1]} ref={visualUl}>
            {liValues.map((value, index) => (
              <li
                className={template.defaultStyles[2]}
                key={index}
                style={{
                  color: fontColor,
                  fontSize: fontSize,
                  fontWeight: fontWeight,
                  textDecoration: textDecoration
                }}
                ref={visualLi}
              >
                {value}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="container-renderized_html">
        <div className="title-btn">
          <h4>HTML</h4>
          <button onClick={() => copyToClipboard("html")}>Copiar</button>
        </div>
        <div id="html" className="html">
          <span>
            {"<"}
            {template.elementType}
            {' class="'}
            {template.defaultStyles[0]}
            {'"'}
            {">"}
          </span>
          <span>
            {"<"}
            {template.defaultContent ? template.defaultContent.children[0] : null}
            {' class="'}
            {template.defaultStyles[1]}
            {'"'}
            {">"}
          </span>
          {Array.from({ length: template.defaultContent.countGrandson }).map(
            (_, index) => (
              <React.Fragment key={index}>
                <span>
                  {"<" +
                    (template.defaultContent
                      ? template.defaultContent.grandson[0]
                      : null) +
                    ' class="' +
                    template.defaultStyles[2] +
                    '">'}
                  {aTag ? '<a href="">' : null}
                  {liValues[index]}
                  {aTag ? "</a>" : null}
                  {"</" +
                    (template.defaultContent
                      ? template.defaultContent.grandson[0]
                      : null) +
                    ">"}
                </span>
              </React.Fragment>
            )
          )}
          <span>
            {"</"}
            {template.defaultContent ? template.defaultContent.children[0] : null}
            {">"}
          </span>
          <span>
            {"</"}
            {template.elementType}
            {">"}
          </span>
        </div>
      </div>
      
      <div className="container-renderized_css">
        <div className="css-nav">
          <div className="title-btn">
            <h4>Estilos del {"<nav>"}</h4>
            <button onClick={() => copyToClipboard("css-nav")}>Copiar</button>
          </div>
          <div className="css" id="css-nav">
            <span>
              .{template.defaultStyles[0]}
              {" {"}
            </span>
            <span>background-color: {navStyles.backgroundColor};</span>
            <span>width: {navStyles.width};</span>
            <span>padding: {navStyles.padding};</span>
            <span>{"}"}</span>
          </div>
        </div>

        <div className="css-ul">
          <div className="title-btn">
            <h4>Estilos de la {"<ul>"}</h4>
            <button onClick={() => copyToClipboard("css-ul")}>Copiar</button>
          </div>
          <div className="css" id="css-ul">
            <span>
              .{template.defaultStyles[1]}
              {" {"}
            </span>
            <span>display: {ulStyles.display};</span>
            <span>flex-direction: {ulStyles.flexDirection};</span>
            <span>justify-content: {ulStyles.justifyContent};</span>
            <span>gap: {ulStyles.gap};</span>
            <span>width: {ulStyles.width};</span>
            <span>{"}"}</span>
          </div>
        </div>

        <div className="css-li">
          <div className="title-btn">
            <h4>Estilos de la {"<li>"}</h4>
            <button onClick={() => copyToClipboard("css-li")}>Copiar</button>
          </div>
          <div className="css" id="css-li">
            <span>
              .{template.defaultStyles[2]}
              {" {"}
            </span>
            <span>color: {liStyles.color};</span>
            <span>font-size: {liStyles.fontSize};</span>
            <span>font-weight: {liStyles.fontWeight};</span>
            <span>
              text-decoration: {getFirstWord(liStyles.textDecoration)};
            </span>
            <span>{"}"}</span>
          </div>
        </div>

        {aTag ? (
          <div className="css-a">
            <div className="title-btn">
              <h4>Estilos de la {"<a>"}</h4>
              <button onClick={() => copyToClipboard("css-a")}>Copiar</button>
            </div>
            <div className="css" id="css-a">
              <span>a {"{"}</span>
              <span>
                text-decoration: {getFirstWord(liStyles.textDecoration)};
              </span>
              <span>{"}"}</span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FooterComponent;