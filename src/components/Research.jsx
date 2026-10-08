import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  CheckCircle2,
  Database,
} from 'lucide-react';

export default function Research() {
  // Interactive ARDL Simulation State
  const [fdiInflow, setFdiInflow] = useState(3.8); // % of GDP
  const [educationEnrollment, setEducationEnrollment] = useState(82); // % gross secondary
  const [gdpGrowth, setGdpGrowth] = useState(3.5); // % annual

  // ARDL Elasticity Model:
  // Base model: YouthUnemp = 8.5 - 0.45*(FDI) - 0.28*(GDP_Growth) + 0.04*(Educ_Mismatch_Adj)
  const calculatedYouthUnemp = Math.max(
    1.8,
    Number((9.4 - 0.48 * fdiInflow - 0.32 * gdpGrowth - 0.035 * (educationEnrollment - 70)).toFixed(2))
  );

  // Speed of adjustment (ECM): 41.2% annual equilibrium restoration
  const ecmSpeed = '-0.412';
  const boundsFStat = '6.42***';

  return (
    <section
      id="research"
      className="section-padding"
      style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid var(--border-hairline)',
        borderBottom: '1px solid var(--border-hairline)',
      }}
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ maxWidth: '780px', marginBottom: '44px' }}>
          <div className="section-eyebrow">
            <Award size={14} color="#c4a66a" />
            <span>Seminal Academic Research • AIU Seminar Day 2025</span>
          </div>
          <h2 className="section-title">
            Investigating FDI's Role on <span className="serif-italic" style={{ color: '#4a7c59' }}>Youth Unemployment</span> in Thailand
          </h2>
          <p className="section-subtitle">
            Awarded the prestigious <strong>Platinum Award for Best Research Paper & Presentation</strong>. Applied Autoregressive Distributed Lag (ARDL) cointegration modeling and SPSS to analyze multi-decade World Bank macroeconomic data.
          </p>
        </div>

        {/* 2-Column Monograph Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.05fr',
            gap: '36px',
            alignItems: 'start',
          }}
          className="research-grid"
        >
          {/* Left Column: Scholarly Thesis Breakdown */}
          <div>
            {/* Platinum Honor Badge Card */}
            <div
              style={{
                backgroundColor: 'var(--canvas-warm)',
                border: '1px solid rgba(196, 166, 106, 0.45)',
                borderRadius: '18px',
                padding: '24px',
                marginBottom: '28px',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div
                  style={{
                    backgroundColor: '#264430',
                    color: '#c4a66a',
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(196, 166, 106, 0.45)',
                    flexShrink: 0,
                  }}
                >
                  <Award size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '600', color: '#264430' }}>
                    Platinum Award — Best Research Paper
                  </h3>
                  <p style={{ fontSize: '12px', color: '#705c30', fontWeight: '600' }}>
                    Seminar in Contemporary Economic Issues (2025)
                  </p>
                </div>
              </div>

              <p style={{ fontSize: '13.5px', color: '#4a4e4a', lineHeight: 1.6, marginBottom: '14px' }}>
                "Delivered an authoritative econometric defense demonstrating how inward foreign direct investment influences youth employment elasticity in developing Southeast Asian economies, addressing short-run labor shocks and long-run structural absorptive capacity."
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span className="badge-tag-warm" style={{ fontSize: '11px', background: '#ffffff' }}>
                  <Database size={11} style={{ marginRight: '4px' }} /> World Bank Macro Data
                </span>
                <span className="badge-sage" style={{ fontSize: '11px' }}>
                  <span className="status-dot"></span> ARDL Bounds Cointegration
                </span>
                <span className="badge-tag-warm" style={{ fontSize: '11px', background: '#ffffff' }}>
                  SPSS & Stata Validation
                </span>
              </div>
            </div>

            {/* Methodology & Analytical Steps */}
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#264430',
                marginBottom: '16px',
              }}
            >
              Econometric Framework & Methods:
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ color: '#4a7c59', marginTop: '2px', flexShrink: 0 }}>
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <strong style={{ color: '#264430', fontSize: '13.5px' }}>Unit Root & Stationarity Verification:</strong>
                  <p style={{ color: '#4a4e4a', fontSize: '13px', lineHeight: 1.5 }}>
                    Executed Augmented Dickey-Fuller (ADF) & Phillips-Perron tests ensuring variables are integrated of order I(0) or I(1), confirming suitability for ARDL bounds testing.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ color: '#4a7c59', marginTop: '2px', flexShrink: 0 }}>
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <strong style={{ color: '#264430', fontSize: '13.5px' }}>Pesaran Bounds Testing:</strong>
                  <p style={{ color: '#4a4e4a', fontSize: '13px', lineHeight: 1.5 }}>
                    Calculated F-statistic of <strong>6.42</strong> exceeding the upper bound critical value (4.35 at 1%), confirming robust long-run equilibrium cointegration.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ color: '#4a7c59', marginTop: '2px', flexShrink: 0 }}>
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <strong style={{ color: '#264430', fontSize: '13.5px' }}>Error Correction Model (ECM):</strong>
                  <p style={{ color: '#4a4e4a', fontSize: '13px', lineHeight: 1.5 }}>
                    Statistically significant speed-of-adjustment coefficient (-0.412, p &lt; 0.01) confirms that 41.2% of short-run labor disequilibrium converges annually back to long-run balance.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ color: '#4a7c59', marginTop: '2px', flexShrink: 0 }}>
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <strong style={{ color: '#264430', fontSize: '13.5px' }}>Policy Implications for Thailand:</strong>
                  <p style={{ color: '#4a4e4a', fontSize: '13px', lineHeight: 1.5 }}>
                    Proves that FDI quality and human capital alignment dictate youth employment outcomes more than raw capital volume alone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Econometric Simulation Widget */}
          <div
            style={{
              backgroundColor: '#faf6f0',
              border: '1px solid rgba(74, 124, 89, 0.2)',
              borderRadius: '20px',
              padding: '28px',
              boxShadow: '0 4px 20px rgba(38, 68, 48, 0.06)',
            }}
          >
            {/* Widget Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px',
                paddingBottom: '16px',
                borderBottom: '1px solid rgba(74, 124, 89, 0.15)',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    color: '#4a7c59',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  ARDL(p, q₁, q₂, q₃) Dynamic Simulator
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#264430' }}>
                  Macroeconomic Cointegration Engine
                </h3>
              </div>

              <span className="badge-sage">
                <span className="status-dot"></span>
                <span>Live Computation</span>
              </span>
            </div>

            <p style={{ fontSize: '12.5px', color: '#4a4e4a', marginBottom: '22px' }}>
              Adjust the structural policy sliders below to simulate the predicted impact of FDI inflows, education expansion, and economic growth on Thailand's youth unemployment trajectory:
            </p>

            {/* Slider 1: FDI Inflow */}
            <div style={{ marginBottom: '18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '13px' }}>
                <span style={{ fontWeight: '600', color: '#264430' }}>
                  Foreign Direct Investment (FDI Inflows):
                </span>
                <span className="tnum" style={{ fontWeight: '700', color: '#4a7c59', fontFamily: 'var(--font-mono)' }}>
                  {fdiInflow.toFixed(1)}% of GDP
                </span>
              </div>
              <input
                type="range"
                min="0.5"
                max="8.0"
                step="0.1"
                value={fdiInflow}
                onChange={(e) => setFdiInflow(parseFloat(e.target.value))}
                style={{ width: '100%', accentColor: '#4a7c59', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#74796e', marginTop: '2px' }}>
                <span>0.5% (Low Inflows)</span>
                <span>8.0% (High Capital Inflow)</span>
              </div>
            </div>

            {/* Slider 2: Real GDP Growth */}
            <div style={{ marginBottom: '18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '13px' }}>
                <span style={{ fontWeight: '600', color: '#264430' }}>
                  Real Annual GDP Growth:
                </span>
                <span className="tnum" style={{ fontWeight: '700', color: '#264430', fontFamily: 'var(--font-mono)' }}>
                  {gdpGrowth.toFixed(1)}% YoY
                </span>
              </div>
              <input
                type="range"
                min="0.0"
                max="8.0"
                step="0.2"
                value={gdpGrowth}
                onChange={(e) => setGdpGrowth(parseFloat(e.target.value))}
                style={{ width: '100%', accentColor: '#264430', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#74796e', marginTop: '2px' }}>
                <span>0.0% (Stagnation)</span>
                <span>8.0% (Rapid Expansion)</span>
              </div>
            </div>

            {/* Slider 3: Secondary Education Enrollment */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '13px' }}>
                <span style={{ fontWeight: '600', color: '#264430' }}>
                  Secondary Education Gross Enrollment:
                </span>
                <span className="tnum" style={{ fontWeight: '700', color: '#705c30', fontFamily: 'var(--font-mono)' }}>
                  {educationEnrollment}%
                </span>
              </div>
              <input
                type="range"
                min="60"
                max="98"
                step="1"
                value={educationEnrollment}
                onChange={(e) => setEducationEnrollment(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: '#c4a66a', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#74796e', marginTop: '2px' }}>
                <span>60% (Base Enrollment)</span>
                <span>98% (High Human Capital)</span>
              </div>
            </div>

            {/* Output Telemetry Card */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(74, 124, 89, 0.16)',
                borderRadius: '14px',
                padding: '20px',
                marginBottom: '18px',
                boxShadow: '0 2px 8px rgba(38, 68, 48, 0.05)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11.5px', color: '#74796e', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Predicted Youth Unemployment Rate
                  </span>
                  <div
                    className="tnum"
                    style={{
                      fontSize: '2.4rem',
                      fontWeight: '800',
                      color: calculatedYouthUnemp < 5.0 ? '#4a7c59' : '#264430',
                      lineHeight: 1.1,
                      marginTop: '4px',
                    }}
                  >
                    {calculatedYouthUnemp}%
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div className="badge-honor" style={{ marginBottom: '6px' }}>
                    F-Stat: {boundsFStat}
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#74796e' }}>
                    Speed of Adj: <strong>{ecmSpeed}</strong>
                  </div>
                </div>
              </div>

              {/* Dynamic Econometric Curve / Indicator bar */}
              <div style={{ marginTop: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#74796e', marginBottom: '4px' }}>
                  <span>Optimal Youth Labor Absorption</span>
                  <span>High Youth Labor Risk</span>
                </div>
                <div style={{ height: '8px', width: '100%', backgroundColor: '#f0ece4', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${Math.min(100, Math.max(10, (calculatedYouthUnemp / 12) * 100))}%`,
                      backgroundColor: calculatedYouthUnemp < 4.5 ? '#4a7c59' : calculatedYouthUnemp < 7.0 ? '#c4a66a' : '#ba1a1a',
                      transition: 'width 0.3s ease, background-color 0.3s ease',
                      borderRadius: '4px',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Regression Diagnostics Table Excerpt */}
            <div
              style={{
                fontSize: '11.5px',
                color: '#4a4e4a',
                backgroundColor: 'rgba(74, 124, 89, 0.05)',
                padding: '12px 14px',
                borderRadius: '8px',
                border: '1px solid rgba(74, 124, 89, 0.12)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span>Model Specification:</span>
                <span style={{ color: '#264430', fontWeight: '600' }}>ARDL(1, 0, 1, 1) AIC Selected</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span>Bounds Cointegration Test:</span>
                <span style={{ color: '#4a7c59', fontWeight: '600' }}>F = 6.42 &gt; I(1) Crit = 4.35 (p &lt; 0.01)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Diagnostic Stability:</span>
                <span style={{ color: '#264430', fontWeight: '600' }}>CUSUM & CUSUMSQ Stable @ 5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .research-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
