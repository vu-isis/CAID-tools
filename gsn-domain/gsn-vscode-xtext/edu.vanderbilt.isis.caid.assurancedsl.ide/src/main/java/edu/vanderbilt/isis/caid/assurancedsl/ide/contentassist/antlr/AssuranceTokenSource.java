/*
 * generated by Xtext 2.29.0
 */
package edu.vanderbilt.isis.caid.assurancedsl.ide.contentassist.antlr;

import edu.vanderbilt.isis.caid.assurancedsl.ide.contentassist.antlr.internal.InternalAssuranceParser;
import org.antlr.runtime.Token;
import org.antlr.runtime.TokenSource;
import org.eclipse.xtext.parser.antlr.AbstractIndentationTokenSource;

public class AssuranceTokenSource extends AbstractIndentationTokenSource {

	public AssuranceTokenSource(TokenSource delegate) {
		super(delegate);
	}

	@Override
	protected boolean shouldSplitTokenImpl(Token token) {
		// TODO Review assumption
		return token.getType() == InternalAssuranceParser.RULE_WS;
	}

	@Override
	protected int getBeginTokenType() {
		// TODO Review assumption
		return InternalAssuranceParser.RULE_BEGIN;
	}

	@Override
	protected int getEndTokenType() {
		// TODO Review assumption
		return InternalAssuranceParser.RULE_END;
	}

	@Override
	protected boolean shouldEmitPendingEndTokens() {
		return false;
	}
}