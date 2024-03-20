import React, { useEffect, useState, useRef } from 'react'
import './_sectionComponent.scss';
import '../../../css/app.scss';

const SectionComponent = ({ template }) => {
    console.log(template)
    const [h2Values, setH2Values] = useState(() => {
        if(template.edit && template.edit.textArray) {
            return [...template.edit.textArray];
        } else {
            return (Array.from({ length: template.defaultContent.countChildren }, () => 'Item'));
        }
    });
    const [pValues, setPValues] = useState(() => {
        if(template.edit && template.edit.textArray2) {
            return [...template.edit.textArray2];
        } else {
            return (Array.from({ length: template.defaultContent.countChildren }, () => 'Item'));
        }
    });

    const [SectionBgColor, setSectionBgColor] = useState('');
    const [SectionBgColorEdit, setSectionBgColorEdit] = useState(template.edit.SectionBgColor);

    const [ArticleBgColor, setArticleBgColor] = useState('');
    const [ArticleBgColorEdit, setArticleBgColorEdit] = useState(template.edit.ArticleBgColor);


    const [h2FontColor, setH2FontColor] = useState('');
    const [h2FontColorEdit, setH2FontColorEdit] = useState(template.edit.colorTitle);


    const [pFontColor, setPFontColor] = useState('');
    const [pFontColorEdit, setPFontColorEdit] = useState(template.edit.colorItem);


    const [h2FontSize, setH2FontSize] = useState('');
    const [h2FontSizeEdit, setH2FontSizeEdit] = useState(template.edit.fontSizeTitle);

    const [pFontSize, setPFontSize] = useState('');
    const [pFontSizeEdit, setPFontSizeEdit] = useState(template.edit.fontSizeItem);

    const [h2FontWeight, setH2FontWeight] = useState('');
    const [h2FontWeightEdit, setH2FontWeightEdit] = useState(template.edit.fontWeightTitle);

    const [pFontWeight, setPFontWeight] = useState('');
    const [pFontWeightEdit, setPFontWeightEdit] = useState(template.edit.fontWeightItem);

    const [h2TextDecoration, setH2TextDecoration] = useState('');
    const [h2TextDecorationEdit, setH2TextDecorationEdit] = useState(template.edit.textDecorationTitle);

    const [pTextDecoration, setPTextDecoration] = useState('');
    const [pTextDecorationEdit, setPTextDecorationEdit] = useState(template.edit.textDecorationText);

    const [sectionStyles, setSectionStyles] = useState([]);
    
    const [articleStyles, setArticleStyles] = useState([]);

    const [pStyles, setPStyles] = useState([]);


    const [h2Styles, setH2Styles] = useState([]);

    const handleH2Change = (index) => (event) => {
        const newH2Values = [...h2Values];
        newH2Values[index] = event.target.value;
        setH2Values(newH2Values);
    };

    const handlePChange = (index) => (event) => {
        const newPValues = [...pValues];
        newPValues[index] = event.target.value;
        setPValues(newPValues);
    };

    const handleSectionBgColor = (event) => {
        setSectionBgColor(event.target.value);
    };
    const handleSectionBgColorEdit = (event) => {
        setSectionBgColorEdit(event.target.value);
    };
    const handleArticleBgColor = (event) => {
        setArticleBgColor(event.target.value);
    };
    const handleArticleBgColorEdit = (event) => {
        setArticleBgColorEdit(event.target.value);
    };

    const handleH2FontColor = (event) => {
        setH2FontColor(event.target.value);
    };
    const handleH2FontColorEdit = (event) => {
        setH2FontColorEdit(event.target.value);
    };
    const handlePFontColor = (event) => {
        setPFontColor(event.target.value);
    };
    const handlePFontColorEdit = (event) => {
        setPFontColorEdit(event.target.value);
    };

    const handleH2FontSizeChange = (event) => {
        setH2FontSize(`${event.target.value}px`);
    };
    const handleH2FontSizeChangeEdit = (event) => {
        setH2FontSizeEdit(`${event.target.value}px`);
    };
    
    const handlePFontSizeChange = (event) => {
        setPFontSize(`${event.target.value}px`);
    };
    const handlePFontSizeChangeEdit = (event) => {
        setPFontSizeEdit(`${event.target.value}px`);
    };

    const handleH2FontWeightChange = (event) => {
        setH2FontWeight(event.target.value);
    };
    const handleH2FontWeightChangeEdit = (event) => {
        setH2FontWeightEdit(event.target.value);
    };
    
    const handlePFontWeightChange = (event) => {
        setPFontWeight(event.target.value);
    };
    const handlePFontWeightChangeEdit = (event) => {
        setPFontWeightEdit(event.target.value);
    };

    const handleH2TextDecorationChange = (event) => {
        setH2TextDecoration(event.target.value);
    };
    const handleH2TextDecorationChangeEdit = (event) => {
        setH2TextDecorationEdit(event.target.value);
    };
    
    const handlePTextDecorationChange = (event) => {
        setPTextDecoration(event.target.value);
    };
    const handlePTextDecorationChangeEdit = (event) => {
        setPTextDecorationEdit(event.target.value);
    };

    const visualSection = useRef(null);
        useEffect(() => {
            if (visualSection.current && visualArticle.current) {
                const computedSectionStyles = window.getComputedStyle(visualSection.current);
                const computedArticleStyles = window.getComputedStyle(visualArticle.current);
                let widthValue;
                if (computedArticleStyles.flexDirection === 'row') {
                    widthValue = '100%';
                } else {
                    widthValue = computedSectionStyles.width;
                }

                setSectionStyles({
                    backgroundColor: computedSectionStyles.backgroundColor,
                    width: widthValue,
                    padding: computedSectionStyles.padding
                });
        }
    }, [SectionBgColor, SectionBgColorEdit]);    

    

    const visualArticle = useRef(null);
    useEffect(() => {
        if (visualArticle.current) {
            const computedStyles = window.getComputedStyle(visualArticle.current);
            setArticleStyles({
                display: computedStyles.display,
                flexDirection: computedStyles.flexDirection,
                width: '100%',
                gap: computedStyles.gap,
                justifyContent: computedStyles.justifyContent
            });
        }
    }, [ArticleBgColor,ArticleBgColorEdit]);

    const visualH2 = useRef(null);
    useEffect(() => {
        if (visualH2.current) {
            const computedStyles = window.getComputedStyle(visualH2.current);
            setH2Styles({
                color: computedStyles.color,
                fontSize: computedStyles.fontSize,
                fontWeight: computedStyles.fontWeight,
                textDecoration: computedStyles.textDecoration
            });
        }
    }, [h2FontColor,h2FontColorEdit, h2FontSize,h2FontSizeEdit, h2FontWeight,h2FontWeightEdit, h2TextDecoration,h2TextDecorationEdit]);

    const visualP = useRef(null);
    useEffect(() => {
        if (visualP.current) {
            const computedStyles = window.getComputedStyle(visualP.current);
            setPStyles({
                color: computedStyles.color,
                fontSize: computedStyles.fontSize,
                fontWeight: computedStyles.fontWeight,
                textDecoration: computedStyles.textDecoration
            });
        }
    }, [pFontColor,pFontColorEdit, pFontSize,pFontSizeEdit, pFontWeight,pFontWeightEdit, pTextDecoration,pTextDecorationEdit]);

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
        document.execCommand('copy');
        selection.removeAllRanges();
    };

    return (
        <div className='container-pages-default-styles'>
<div className='container-editor'>
    <p>{'<'}{template.elementType}{'>'}</p>
    {Array.from({ length: template.defaultContent.countChildren }).map((_, index) => (
        <React.Fragment key={index}>
            {/* Asume que `children` es un array con al menos dos elementos, donde el primer elemento es tratado como un contenedor (ej. div) y el segundo como el título (ej. h2) */}
            <div className= {`${template.defaultContent.children[0]}`}>
                <p>{'<'}{template.defaultContent ? template.defaultContent.children[0] : null}{'>'}</p>
                {/* Aquí asumimos que querías un h2 basado en tu función handleH2Change */}
                <p className= {`${template.defaultContent.children[1]}`}>
                    {'<'}{template.defaultContent ? template.defaultContent.children[1] : null}{'>'}
                    <input type='text' onChange={handleH2Change(index)} maxLength={12} placeholder='Máximo 12 caracteres'/>
                    {'</'}{template.defaultContent ? template.defaultContent.children[1] : null}{'>'}
                </p>
                <p >
                            {'<'}{template.defaultContent ? template.defaultContent.grandson[0] : null}{'>'}
                            <input type='text' onChange={handlePChange(index)} maxLength={12} placeholder='Máximo 12 caracteres'/>
                            {'</'}{template.defaultContent ? template.defaultContent.grandson[0] : null}{'>'}
                        </p>
            
                <p>{'</'}{template.defaultContent ? template.defaultContent.children[0] : null}{'>'}</p>
            </div>
        </React.Fragment>
    ))}
    <p>{'</'}{template.elementType}{'>'}</p>
</div>

            <div className="styles-editor">
                <label htmlFor="sectionbgColor">
                    <p>Color de Fondo</p>
                    <input type="color" id='bgColor' onChange={
                        !template.edit.SectionBgColor ? handleSectionBgColor : handleSectionBgColorEdit}/>
                </label>

                <label htmlFor="articlebgColor">
                    <p>Color de Fondo para Article</p>
                    <input type="color" id='bgColor' onChange={
                        !template.edit.ArticleBgColor ? handleArticleBgColor : handleArticleBgColorEdit}/>
                </label>
                
                <label htmlFor="colorTitle">
                    <p>Color de Letra para H2</p>
                    <input type="color" id='colorTitle' onChange={
                        !template.edit.colorTitle ? handleH2FontColor : handleH2FontColorEdit}/>
                </label>

                <label htmlFor="colorItem">
                    <p>Color de Letra para P</p>
                    <input type="color" id='colorItem' onChange={
                        !template.edit.colorItem ?  handlePFontColor : handlePFontColorEdit}/>
                </label>
                
                <label htmlFor="fontSizeTitle">
                    Tamaño de Letra para H2
                    <input type="number" id="fontSizeTitle" onChange={
                        !template.edit.fontSizeTitle ?  handleH2FontSizeChange : handleH2FontSizeChangeEdit} />
                    </label>
                    <label htmlFor="fontSizeItem">
                    Tamaño de Letra para P
                    <input type="number" id="fontSizeItem" onChange={
                        !template.edit.fontSizeItem ? handlePFontSizeChange : handlePFontSizeChangeEdit} />
                </label>
                
                <label htmlFor="fontWeightTitle">
                    <p>Negrita H2</p>
                    <div>
                    <input   type="checkbox" 
                        name='FontWeightTitle' 
                        value="bold" 
                        checked={template.edit.fontWeightTitle ? h2FontWeightEdit === "bold" : h2FontWeight === "bold"}
                        onChange={(event) => {
                            const isChecked = event.target.checked;
                            const newValue = isChecked ? "bold" : "normal";
                            if (!template.edit.fontWeighTitle) {
                                setH2FontWeight(newValue);
                            } else {
                                setH2FontWeightEdit(newValue);
                            }
                        }}/>
                    </div>                    
                </label>

                <label htmlFor="fontWeightItem">
                    <p>Negrita P</p>
                    <div>
                    <input   type="checkbox" 
                        name='FontWeightItem' 
                        value="bold" 
                        checked={template.edit.fontWeightItem ? pFontWeightEdit === "bold" : pFontWeight === "bold"}
                        onChange={(event) => {
                            const isChecked = event.target.checked;
                            const newValue = isChecked ? "bold" : "normal";
                            if (!template.edit.fontWeighItem) {
                                setPFontWeight(newValue);
                            } else {
                                setPFontWeightEdit(newValue);
                            }
                        }}/>
                    </div>
                    
                </label>


                
                <label htmlFor="textDecorationTitle">
                    <p>Subrayado H2</p>
                    <div>
                    <input   type="checkbox" 
                        name='textDecorationTitle' 
                        value="underline" 
                        checked={template.edit.textDecorationTitle ? h2TextDecorationEdit === "underline" : h2TextDecoration === "underline"}
                        onChange={(event) => {
                            const isChecked = event.target.checked;
                            const newValue = isChecked ? "underline" : "none";
                            if (!template.edit.textDecorationTitle) {
                                setH2TextDecoration(newValue);
                            } else {
                                setH2TextDecorationEdit(newValue);
                            }
                        }}/>
                    </div>
                    
                </label>

                <label htmlFor="textDecorationText">
                    <p>Subrayado P</p>
                    <div>
                    <input   type="checkbox" 
                        name='textDecorationText' 
                        value="underline" 
                        checked={template.edit.textDecorationText ? pTextDecorationEdit === "underline" : pTextDecoration === "underline"}
                        onChange={(event) => {
                            const isChecked = event.target.checked;
                            const newValue = isChecked ? "underline" : "none";
                            if (!template.edit.textDecorationText) {
                                setPTextDecoration(newValue);
                            } else {
                                setPTextDecorationEdit(newValue);
                            }
                        }}/>
                    </div>                    
                </label>
                
            </div>

            <div className="container-renderized_visual">
    <section className={template.defaultStyles[0]} style={{ backgroundColor:
    
     template.edit.SectionBgColor ? 

     `${SectionBgColorEdit}` 

     : `${SectionBgColor}` 

     }} ref={visualSection}>

        {Array.from({ length: template.defaultContent.countChildren }).map((_, index) => (
            <article className={template.defaultStyles[1]} style={{ backgroundColor:

             template.edit.bgColorArticle ? 

             `${ArticleBgColorEdit}`

             : `${ArticleBgColor}`

              }} key={index} ref={visualArticle}>
                <h2 className={template.defaultStyles[2]} style={{ color:

                 template.edit.colorTitle ?

                  `${h2FontColorEdit}` 

                  :`${h2FontColor}` ,
                  
                   fontSize:

                   template.edit.fontSizeTitle ?

                    `${h2FontSizeEdit}`

                    :`${h2FontSize}` ,
                    
                     fontWeight: 

                     template.edit.fontWeightTitle ?

                    `${h2FontWeightEdit}`

                    :`${h2FontWeight}`,
                    
                    
                     textDecoration:
                     
                     template.edit.textDecorationTitle ?
                     
                      `${h2TextDecorationEdit}`

                      :  `${h2TextDecoration}`,
                      
                      
                       }}>{h2Values[index]}</h2>

              
                    <p className={template.defaultStyles[3]} style={{ color:
                    template.edit.colorItem ? 
                    
                     `${pFontColorEdit}`
                     
                     :`${pFontColor}`,
                     
                      fontSize:
                      
                      template.edit.fontSizeItem ? 
                      
                       `${pFontSizeEdit}`
                       
                       :`${pFontSize}`, 
                       
                       fontWeight:

                       template.edit.fontWeightItem?
                       
                        `${pFontWeightEdit}`
                        
                        :`${pFontWeight}`,
                        
                         textDecoration:

                         template.edit.textDecorationText?
                         
                          `${pTextDecoration}`
                          
                          :`${pTextDecoration}`, 
                          
                          }} key={`${index}-${index}`}>{pValues[index]}</p>
            </article>
                ))}


    </section>
</div>

            <div className='container-renderized_html'>
                <div className='title-btn'>
                    <h4>HTML</h4>
                    <button onClick={() => copyToClipboard('html')}>Copiar</button>
                </div>
                <div id='html' className='html'>
                    <span>{'<'}{template.elementType}{'>'}</span>
                    {Array.from({ length: template.defaultContent.countChildren }).map((_, index) => (
                    <React.Fragment key={index}>
                    <span>{'<'}{template.defaultContent ? template.defaultContent.children[0] : null}{'>'}</span>
                        <span> 
                            {'<' + (template.defaultContent ? template.defaultContent.children[1] : null) + '>'}
                            {h2Values[index]}
                            {'</' + (template.defaultContent ? template.defaultContent.children[1] : null) + '>'}
                        </span>
                        <span> 
                            {'<' + (template.defaultContent ? template.defaultContent.grandson[0] : null) + '>'}
                            {pValues[index]}
                            {'</' + (template.defaultContent ? template.defaultContent.grandson[0] : null) + '>'}
                        </span>
                        <span>{'</'}{template.defaultContent ? template.defaultContent.children[0] : null}{'>'}</span>
                    </React.Fragment>
                    ))}       
                     <span>{'</'}{template.elementType}{'>'}</span>
                </div>
            </div>
            <div className='container-renderized_css'>
                <div className='css-section'>
                    <div className='title-btn'>
                        <h4>Estilos del {'<section>'}</h4>
                        <button onClick={() => copyToClipboard('css-section')}>Copiar</button>
                    </div>
                    <div className='css' id='css-section'>
                        <span>.{template.defaultStyles[0]}{' {'}</span>
                        <span>background-color: {sectionStyles.backgroundColor};</span>
                        <span>width: {sectionStyles.width};</span>
                        <span>padding: {sectionStyles.padding};</span>
                        <span>{'}'}</span>
                    </div>
                </div>
                
                <div className='css-article 300px'>
                    <div className='title-btn'>
                        <h4>Estilos de la {'<article>'}</h4>
                        <button onClick={() => copyToClipboard('css-article')}>Copiar</button>
                    </div>
                    <div className='css' id='css-article'>
                        <span>.{template.defaultStyles[1]}{' {'}</span>
                        <span>display: {articleStyles.display};</span>
                        <span>flex-direction: {articleStyles.flexDirection};</span>
                        <span>justify-content: {articleStyles.justifyContent};</span>
                        <span>gap: {articleStyles.gap};</span>
                        <span>width: {articleStyles.width};</span>
                        <span>{'}'}</span>
                    </div>
                </div>
                
                <div className='css-h2'>
                    <div className='title-btn'>
                        <h4>Estilos de la {'<h2>'}</h4>
                        <button onClick={() => copyToClipboard('css-h2')}>Copiar</button>
                    </div>
                    <div className='css' id='css-h2'>
                        <span>.{template.defaultStyles[2]}{' {'}</span>
                        <span>color: {h2Styles.color};</span>
                        <span>font-size: {h2Styles.fontSize};</span>
                        <span>font-weight: {h2Styles.fontWeight};</span>
                        <span>text-decoration: {getFirstWord(h2Styles.textDecoration)};</span>
                        <span>{'}'}</span>
                    </div>
                </div>
                <div className='css-p'>
                    <div className='title-btn'>
                        <h4>Estilos de la {'<p>'}</h4>
                        <button onClick={() => copyToClipboard('css-p')}>Copiar</button>
                    </div>
                    <div className='css' id='css-p'>
                        <span>.{template.defaultStyles[3]}{' {'}</span>
                        <span>color: {pStyles.color};</span>
                        <span>font-size: {pStyles.fontSize};</span>
                        <span>font-weight: {pStyles.fontWeight};</span>
                        <span>text-decoration: {getFirstWord(pStyles.textDecoration)};</span>
                        <span>{'}'}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SectionComponent