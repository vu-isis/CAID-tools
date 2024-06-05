/*
 * generated by Xtext 2.29.0
 */
package edu.vanderbilt.isis.caid.assurancedsl;

import org.eclipse.xtext.formatting2.IFormatter2;
import org.eclipse.xtext.service.SingletonBinding;
import org.eclipse.xtext.ide.editor.syntaxcoloring.ISemanticHighlightingCalculator;

import edu.vanderbilt.isis.caid.assurancedsl.formatting2.AssuranceFormatter;
import edu.vanderbilt.isis.caid.assurancedsl.highlighting.AssuranceHighlighting;
import edu.vanderbilt.isis.caid.assurancedsl.validation.AssuranceValidator;

/**
 * Use this class to register components to be used at runtime / without the Equinox extension registry.
 */
public class AssuranceRuntimeModule extends AbstractAssuranceRuntimeModule {

    @Override
    public Class<? extends IFormatter2> bindIFormatter2() {
        return AssuranceFormatter.class;
    }

    public Class<? extends ISemanticHighlightingCalculator> bindISemanticHighlightingCalculator() {
        return AssuranceHighlighting.class;
    }

    
    @SingletonBinding(eager=true)
	public Class<? extends AssuranceValidator> bindAssuranceValidator() {
		return AssuranceValidator.class;
	}

    
}
