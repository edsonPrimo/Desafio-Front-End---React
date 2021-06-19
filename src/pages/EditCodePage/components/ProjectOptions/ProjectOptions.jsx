import React, { useContext } from 'react';
import './style.scss'

import useCodeEditorContext  from '../../../../hooks/CodeEditorContext';

function ProjectOptions() {

	const {
		projectColor,
    handleChangeColor,
    setLanguage,
    setProjectTitle,
    setProjectDescription,
		language

	} = useCodeEditorContext();

	function handleLanguage(e) {
		setLanguage(e.target.value)
	}

	return (
		<section className="project-options flex flex--coluna" >
			<div>
				<h2 className="project-options__titulo">Seu projeto</h2>
				<input type="text" className="project-options__input input" onChange={setProjectTitle} required placeholder="Nome do seu projeto" />
				<textarea className="project-options__descricao project-options__input input" onChange={setProjectDescription} required
					placeholder="Descrição do seu projeto" ></textarea>
			</div>

			<div className="project-options__personalizacao">
				<h2 className="project-options__titulo">Personalização</h2>
				<select name="linguagem" id="" onChange={handleLanguage} className="project-options__input input project-options__select">
					<option className="project-options__select__option" value="javascript">JavaScript</option>
					<option className="project-options__select__option" value="python">Python</option>
					<option className="project-options__select__option" value="css">CSS</option>
				</select>
				<div className="project-options__wrapper">
					<input type="color" name="escolha-bg" value={projectColor} onChange={(e) =>handleChangeColor(e.target.value)} className="project-options__input input-color" value="#6BD1FF" />
				</div>
				<input type="submit" className="project-options__btn-salvar botao" value="Salvar projeto" />
			</div>
		</section>
	)
}

export default ProjectOptions