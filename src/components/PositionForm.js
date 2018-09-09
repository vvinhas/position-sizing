import React from 'react'
import Currency from '../helpers/Currency'

const PositionForm = () => (
  <div className="box">
    <div className="columns">
      {/* Ativo */}
      <div className="column">
        <div className="field">
          <label className="label">
            <span className="icon has-text-info">
              <i className="fas fa-chart-line"></i>
            </span>
            <span>Ativo</span>
          </label>
          <div className="control">
            <input
              type="text"
              className="input is-uppercase"
              placeholder="Ex: PETR4"
            />
          </div>
        </div>
      </div>
      {/* Entrada */}
      <div className="column">
        <div className="field">
          <label className="label">
            <span className="icon has-text-success">
              <i className="fas fa-caret-up"></i>
            </span>
            <span>Entrada</span>
          </label>
          <div className="control">
            <Currency amount="" maxLength={5}>
              {(amount, handler, rawAmount) => (
                <input
                  type="text"
                  className="input"
                  placeholder="Ex: 8,45"
                  value={rawAmount ? amount : ''}
                  onKeyDown={handler}
                />
              )}
            </Currency>
          </div>
        </div>
      </div>
      {/* Saída */}
      <div className="column">
        <div className="field">
          <label className="label">
            <span className="icon has-text-danger">
              <i className="fas fa-caret-down"></i>
            </span>
            <span>Saída</span>
          </label>
          <div className="control">
          <Currency amount="" maxLength={5}>
            {(amount, handler, rawAmount) => (
              <input
                type="text"
                className="input"
                placeholder="Ex: 6,87"
                value={rawAmount ? amount : ''}
                onKeyDown={handler}
              />
            )}
          </Currency>
          </div>
        </div>
      </div>
      {/* Button */}
      <div className="column">
        <div className="field">
          <label className="label is-hidden-mobile">&nbsp;</label>
          <div className="control">
            <button className="button is-info">
              <span className="icon">
                <i className="fas fa-save"></i>
              </span>
              <span>Salvar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default PositionForm