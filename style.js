'use strict'

function addCustomPlaceholder (inputName) {
    const input = document.getElementById(inputName);
    const container = document.createElement('div');
    const placeholder = document.createElement('div');

    var hidePlaceholder = function () {
        placeholder.style.display = 'none';
    };

    var showPlaceholder = function () {
        if (input.value.length === 0)
            placeholder.style.display = '';
    };

    var onPlaceholderClicked = function () {
        hidePlaceholder();
        input.focus();
    };

    input.parentNode.replaceChild(container, input);
    container.appendChild(input);
    container.appendChild(placeholder);

    container.className = 'custom-placeholder-container';
    placeholder.className = 'custom-placeholder';
    placeholder.textContent = input.placeholder;
    input.placeholder = '';

    input.addEventListener('focus', hidePlaceholder);
    input.addEventListener('blur', showPlaceholder);
    placeholder.addEventListener('click', onPlaceholderClicked);
};

function removeBorderForm() {
    this.style.borderColor = 'rgb(247, 245, 249)';
};

function resetBorderForm(event) {
    if (event.toElement.contains(event.target))
        this.style.borderColor = '';
};

function removeBorderOnHover(target, hoveredElementId) {
  const hoveredElement = document.getElementById(hoveredElementId);
  hoveredElement.addEventListener('mouseenter', removeBorderForm.bind(target));
  hoveredElement.addEventListener('mouseleave', resetBorderForm.bind(target));
};

const question = document.getElementById('question');

removeBorderOnHover(question, 'name');
removeBorderOnHover(question, 'phone');
removeBorderOnHover(question, 'mail');

addCustomPlaceholder('name');
addCustomPlaceholder('phone');
addCustomPlaceholder('mail');

